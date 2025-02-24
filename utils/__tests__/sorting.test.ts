import { sortAndFilterCollection } from "../sorting";

const mockData = [
  {
    id: "1",
    first_name: "Harry",
    last_name: "Potter",
    text: "",
    email: "harry.potter@hogwarts.com",
    backgroundColor: "#4084b5",
    avatar: undefined,
    avatar_large:
      "https://robohash.org/exblanditiismodi.png?size=3840x2160&set=set1&bgset=bg1",
  },
  {
    id: "2",
    first_name: "Ron",
    last_name: "Weasley",
    text: "",
    email: "ron.weasley@hogwarts.com",
    backgroundColor: "#54ff9e",
    avatar: undefined,
    avatar_large: null,
  },
  {
    id: "3",
    first_name: "Hermione",
    last_name: "Granger",
    text: "",
    email: "hermione.granger@hogwarts.com",
    backgroundColor: "#08a43c",
    avatar: undefined,
    avatar_large:
      "https://robohash.org/iustovelitest.bmp?size=3840x2160&set=set1&bgset=bg1",
  },
  {
    id: "4",
    first_name: "Albus",
    last_name: null,
    text: "",
    email: "albus.dumbledore@hogwarts.com",
    backgroundColor: "#861b5b",
    avatar: undefined,
    avatar_large: null,
  },
  {
    id: "5",
    first_name: "Rubeus",
    last_name: null,
    text: "",
    email: "rubeus.hagrid@hogwarts.com",
    backgroundColor: "#339171",
    avatar: undefined,
    avatar_large:
      "https://robohash.org/commodifugitut.bmp?size=3840x2160&set=set1&bgset=bg1",
  },
  {
    id: "6",
    first_name: "Sirius",
    last_name: null,
    text: "",
    email: "tsirius.black@hogwarts.com",
    backgroundColor: "#2c7bc4",
    avatar: undefined,
    avatar_large:
      "https://robohash.org/eligendiquiin.jpg?size=3840x2160&set=set1&bgset=bg1",
  },
];

describe("sortAndFilterCollection", () => {
  it("returns original collection if called without sort value and filter is off", () => {
    const sortedCollection = sortAndFilterCollection(mockData, null, false);
    expect(sortedCollection).toEqual(mockData);
  });

  it("returns filtered collection if called with filter is on", () => {
    const sortedCollection = sortAndFilterCollection(mockData, null, true);
    expect(sortedCollection).toStrictEqual([
      {
        id: "1",
        first_name: "Harry",
        last_name: "Potter",
        text: "",
        email: "harry.potter@hogwarts.com",
        backgroundColor: "#4084b5",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/exblanditiismodi.png?size=3840x2160&set=set1&bgset=bg1",
      },
      {
        id: "3",
        first_name: "Hermione",
        last_name: "Granger",
        text: "",
        email: "hermione.granger@hogwarts.com",
        backgroundColor: "#08a43c",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/iustovelitest.bmp?size=3840x2160&set=set1&bgset=bg1",
      },
      {
        id: "5",
        first_name: "Rubeus",
        last_name: null,
        text: "",
        email: "rubeus.hagrid@hogwarts.com",
        backgroundColor: "#339171",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/commodifugitut.bmp?size=3840x2160&set=set1&bgset=bg1",
      },
      {
        id: "6",
        first_name: "Sirius",
        last_name: null,
        text: "",
        email: "tsirius.black@hogwarts.com",
        backgroundColor: "#2c7bc4",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/eligendiquiin.jpg?size=3840x2160&set=set1&bgset=bg1",
      },
    ]);
  });

  it("returns sorted collection ASC", () => {
    const sortedCollection = sortAndFilterCollection(mockData, "ASC", false);
    expect(sortedCollection).toEqual([
      {
        id: "3",
        first_name: "Hermione",
        last_name: "Granger",
        text: "",
        email: "hermione.granger@hogwarts.com",
        backgroundColor: "#08a43c",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/iustovelitest.bmp?size=3840x2160&set=set1&bgset=bg1",
      },
      {
        id: "1",
        first_name: "Harry",
        last_name: "Potter",
        text: "",
        email: "harry.potter@hogwarts.com",
        backgroundColor: "#4084b5",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/exblanditiismodi.png?size=3840x2160&set=set1&bgset=bg1",
      },
      {
        id: "2",
        first_name: "Ron",
        last_name: "Weasley",
        text: "",
        email: "ron.weasley@hogwarts.com",
        backgroundColor: "#54ff9e",
        avatar: undefined,
        avatar_large: null,
      },
      {
        id: "4",
        first_name: "Albus",
        last_name: null,
        text: "",
        email: "albus.dumbledore@hogwarts.com",
        backgroundColor: "#861b5b",
        avatar: undefined,
        avatar_large: null,
      },
      {
        id: "5",
        first_name: "Rubeus",
        last_name: null,
        text: "",
        email: "rubeus.hagrid@hogwarts.com",
        backgroundColor: "#339171",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/commodifugitut.bmp?size=3840x2160&set=set1&bgset=bg1",
      },
      {
        id: "6",
        first_name: "Sirius",
        last_name: null,
        text: "",
        email: "tsirius.black@hogwarts.com",
        backgroundColor: "#2c7bc4",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/eligendiquiin.jpg?size=3840x2160&set=set1&bgset=bg1",
      },
    ]);
  });

  it("returns sorted collection ASC and only items with large avatar ", () => {
    const sortedCollection = sortAndFilterCollection(mockData, "ASC", true);
    expect(sortedCollection).toEqual([
      {
        id: "3",
        first_name: "Hermione",
        last_name: "Granger",
        text: "",
        email: "hermione.granger@hogwarts.com",
        backgroundColor: "#08a43c",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/iustovelitest.bmp?size=3840x2160&set=set1&bgset=bg1",
      },
      {
        id: "1",
        first_name: "Harry",
        last_name: "Potter",
        text: "",
        email: "harry.potter@hogwarts.com",
        backgroundColor: "#4084b5",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/exblanditiismodi.png?size=3840x2160&set=set1&bgset=bg1",
      },
      {
        id: "5",
        first_name: "Rubeus",
        last_name: null,
        text: "",
        email: "rubeus.hagrid@hogwarts.com",
        backgroundColor: "#339171",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/commodifugitut.bmp?size=3840x2160&set=set1&bgset=bg1",
      },
      {
        id: "6",
        first_name: "Sirius",
        last_name: null,
        text: "",
        email: "tsirius.black@hogwarts.com",
        backgroundColor: "#2c7bc4",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/eligendiquiin.jpg?size=3840x2160&set=set1&bgset=bg1",
      },
    ]);
  });

  it("returns sorted collection DESC", () => {
    const sortedCollection = sortAndFilterCollection(mockData, "DESC", false);
    expect(sortedCollection).toEqual([
      {
        id: "2",
        first_name: "Ron",
        last_name: "Weasley",
        text: "",
        email: "ron.weasley@hogwarts.com",
        backgroundColor: "#54ff9e",
        avatar: undefined,
        avatar_large: null,
      },
      {
        id: "1",
        first_name: "Harry",
        last_name: "Potter",
        text: "",
        email: "harry.potter@hogwarts.com",
        backgroundColor: "#4084b5",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/exblanditiismodi.png?size=3840x2160&set=set1&bgset=bg1",
      },
      {
        id: "3",
        first_name: "Hermione",
        last_name: "Granger",
        text: "",
        email: "hermione.granger@hogwarts.com",
        backgroundColor: "#08a43c",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/iustovelitest.bmp?size=3840x2160&set=set1&bgset=bg1",
      },
      {
        id: "6",
        first_name: "Sirius",
        last_name: null,
        text: "",
        email: "tsirius.black@hogwarts.com",
        backgroundColor: "#2c7bc4",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/eligendiquiin.jpg?size=3840x2160&set=set1&bgset=bg1",
      },
      {
        id: "5",
        first_name: "Rubeus",
        last_name: null,
        text: "",
        email: "rubeus.hagrid@hogwarts.com",
        backgroundColor: "#339171",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/commodifugitut.bmp?size=3840x2160&set=set1&bgset=bg1",
      },
      {
        id: "4",
        first_name: "Albus",
        last_name: null,
        text: "",
        email: "albus.dumbledore@hogwarts.com",
        backgroundColor: "#861b5b",
        avatar: undefined,
        avatar_large: null,
      },
    ]);
  });

  it("returns sorted collection DESC  and only items with large avatar", () => {
    const sortedCollection = sortAndFilterCollection(mockData, "DESC", true);
    expect(sortedCollection).toEqual([
      {
        id: "1",
        first_name: "Harry",
        last_name: "Potter",
        text: "",
        email: "harry.potter@hogwarts.com",
        backgroundColor: "#4084b5",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/exblanditiismodi.png?size=3840x2160&set=set1&bgset=bg1",
      },
      {
        id: "3",
        first_name: "Hermione",
        last_name: "Granger",
        text: "",
        email: "hermione.granger@hogwarts.com",
        backgroundColor: "#08a43c",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/iustovelitest.bmp?size=3840x2160&set=set1&bgset=bg1",
      },
      {
        id: "6",
        first_name: "Sirius",
        last_name: null,
        text: "",
        email: "tsirius.black@hogwarts.com",
        backgroundColor: "#2c7bc4",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/eligendiquiin.jpg?size=3840x2160&set=set1&bgset=bg1",
      },
      {
        id: "5",
        first_name: "Rubeus",
        last_name: null,
        text: "",
        email: "rubeus.hagrid@hogwarts.com",
        backgroundColor: "#339171",
        avatar: undefined,
        avatar_large:
          "https://robohash.org/commodifugitut.bmp?size=3840x2160&set=set1&bgset=bg1",
      },
    ]);
  });
});
