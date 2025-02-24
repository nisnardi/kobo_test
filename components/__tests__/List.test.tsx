import { render, screen, fireEvent } from "@testing-library/react-native";
import { List } from "@/components/List";
import { Item } from "@/types/Item";

const mockData: Item[] = [
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
];

describe("List Component", () => {
  const props = {
    data: mockData,
    showListAsGrid: false,
    isLoading: false,
    isLoadingPage: false,
    onPressItem: jest.fn(),
    onEndReached: jest.fn(),
  };

  it("handles loading", () => {
    render(<List {...props} isLoading />);

    expect(screen.getByTestId("loading-test-id")).toBeOnTheScreen();
  });

  it("handles empty collection", () => {
    render(<List {...props} data={[]} />);

    expect(screen.getByText("No Items to show..")).toBeOnTheScreen();
  });

  it("shows list", () => {
    render(<List {...props} />);

    expect(screen.getAllByTestId("list-item-container-test-id").length).toBe(3);
  });

  it("shows grid", () => {
    render(<List {...props} showListAsGrid />);

    expect(
      screen.getAllByTestId("list-grid-item-container-test-id").length
    ).toBe(3);
  });

  it("handles item press", () => {
    const onPressItemMock = jest.fn();
    render(<List {...props} onPressItem={onPressItemMock} />);
    const firstItem = screen.getAllByTestId("list-item-container-test-id")[0];

    fireEvent.press(firstItem);

    expect(onPressItemMock).toHaveBeenCalled();
  });

  it("shows footer", () => {
    const oneUserMockData: Item[] = [
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
    ];
    render(<List {...props} data={oneUserMockData} isLoadingPage={false} />);

    expect(screen.getByText("End of list")).toBeTruthy();
  });

  it("shows loading footer ", () => {
    const oneUserMockData: Item[] = [
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
    ];
    render(<List {...props} data={oneUserMockData} isLoadingPage={true} />);

    expect(screen.getByTestId("loading-test-id")).toBeTruthy();
  });
});
