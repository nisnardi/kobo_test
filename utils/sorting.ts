import { Item } from "@/types/Item";
import { Sort } from "@/types/Sort";

export const sortAndFilterCollection = (
  collection: Item[],
  order: Sort | null,
  filter: boolean
): Item[] => {
  const collectionWithLastName: Item[] = [];
  const collectionWithoutLastName: Item[] = [];

  if (order === null && !filter) {
    return collection;
  }

  const filteredCollection = filter
    ? collection.filter((item) => item.avatar_large !== null)
    : collection;

  if (order === null) {
    return filteredCollection;
  }

  filteredCollection.forEach((item) => {
    if (item.last_name === null) {
      collectionWithoutLastName.push(item);
    } else {
      collectionWithLastName.push(item);
    }
  });

  collectionWithLastName.sort((itemA, itemB) => {
    const lastNameA = itemA.last_name || "";
    const lastNameB = itemB.last_name || "";

    return order === "ASC"
      ? lastNameA.localeCompare(lastNameB)
      : lastNameB.localeCompare(lastNameA);
  });

  collectionWithoutLastName.sort((itemA, itemB) => {
    const firstNameA = itemA.first_name || "";
    const firstNameB = itemB.first_name || "";

    return order === "ASC"
      ? firstNameA.localeCompare(firstNameB)
      : firstNameB.localeCompare(firstNameA);
  });

  return [...collectionWithLastName, ...collectionWithoutLastName];
};
