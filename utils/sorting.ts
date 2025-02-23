import { Item } from "@/types/Item";
import { Sort } from "@/types/Sort";

export const sortCollection = (
  collection: Item[],
  order: Sort,
  filter: boolean
): Item[] => {
  const collectionWithLastName: Item[] = [];
  const collectionWithoutLastName: Item[] = [];

  collection.forEach((item) => {
    if (filter && item.avatar_large === null) {
      return;
    }

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
