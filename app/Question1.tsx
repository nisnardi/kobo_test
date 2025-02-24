import React, { useEffect, useMemo, useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { COLORS } from "@/constants/Colors";
import { Item } from "@/types/Item";
import { Sort } from "@/types/Sort";
import { sortAndFilterCollection } from "@/utils/sorting";
import { fetchUrlList, fetchUserPage } from "@/utils/fetch";

export default function Question1() {
  const [users, setUsers] = useState<Item[]>([]);
  const [showListAsGrid, setShowListAsGrid] = useState(false);
  const [sort, setSort] = useState<Sort | null>(null);
  const [shouldFilterWithoutAvatar, setShouldFilterWithoutAvatar] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchList = async () => {
      setIsLoading(true);
      let pageUrls = urls;

      try {
        if (urls.length === 0) {
          pageUrls = await fetchUrlList();
          setUrls(pageUrls);
        }

        const fetchedUsers = await fetchUserPage(pageUrls[pageNumber]);
        setUsers(fetchedUsers);
      } catch (error) {
        console.log("Initial Load", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchList();
  }, []);

  const sortedUsers = useMemo(() => {
    return sortAndFilterCollection(users, sort, shouldFilterWithoutAvatar);
  }, [users, sort, shouldFilterWithoutAvatar]);

  const fetchNextPage = async () => {
    setIsLoadingPage(true);
    try {
      if (pageNumber < urls.length - 1) {
        const newPageNumber = pageNumber + 1;
        const newUsers = await fetchUserPage(urls[newPageNumber]);

        setUsers([...users, ...newUsers]);
        setPageNumber(newPageNumber);
      }
    } catch (error) {
      console.log("Fetch next page: ", error);
    } finally {
      setIsLoadingPage(false);
    }
  };

  const _onPressItem = () => {
    console.log("open item");
  };

  const _onPressGrid = () => setShowListAsGrid(true);

  const _onPressList = () => setShowListAsGrid(false);
  const _onPressSort = (sortType: Sort) => setSort(sortType);

  const _onPressAvatarFilter = () => {
    setShouldFilterWithoutAvatar((prevFilter) => !prevFilter);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.container}>
        <Header
          onPressGrid={_onPressGrid}
          onPressList={_onPressList}
          onPressSort={_onPressSort}
          onPressAvatarFilter={_onPressAvatarFilter}
          isAvatarFilterEnabled={shouldFilterWithoutAvatar}
        />
        <List
          data={sortedUsers}
          onPressItem={_onPressItem}
          showListAsGrid={showListAsGrid}
          isAvatarFilterEnabled={shouldFilterWithoutAvatar}
          isLoading={isLoading}
          isLoadingPage={isLoadingPage}
          onEndReached={fetchNextPage}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
