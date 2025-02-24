import { fireEvent, render, screen } from "@testing-library/react-native";
import { ListGridItem } from "../ListGridItem";

describe("ListGridItem component", () => {
  it("renders item with all properties", () => {
    const item = {
      id: "1",
      backgroundColor: "#CCDDAA",
      avatar: undefined,
      first_name: "Harry",
      last_name: "Potter",
      email: "harry.potter@hogwarts.com",
    };

    render(<ListGridItem onPress={() => {}} item={item} itemWidth={200} />);

    expect(screen.getByText("Harry Potter")).toBeOnTheScreen();
    expect(screen.getByText("harry.potter@hogwarts.com")).toBeOnTheScreen();
    expect(screen.getByTestId("list-grid-item-container-test-id")).toHaveStyle({
      backgroundColor: "#CCDDAA",
    });
    expect(
      screen.getByTestId("list-grid-item-image-test-id")
    ).toBeOnTheScreen();
  });

  it("renders item without last name", () => {
    const item = {
      id: "1",
      backgroundColor: "#CCDDAA",
      avatar: undefined,
      first_name: "Harry",
      last_name: undefined,
      email: "harry.potter@hogwarts.com",
    };

    render(<ListGridItem onPress={() => {}} item={item} itemWidth={200} />);

    expect(screen.getByText("Harry")).toBeOnTheScreen();
    expect(screen.getByText("harry.potter@hogwarts.com")).toBeOnTheScreen();
    expect(screen.getByTestId("list-grid-item-container-test-id")).toHaveStyle({
      backgroundColor: "#CCDDAA",
    });
    expect(
      screen.getByTestId("list-grid-item-image-test-id")
    ).toBeOnTheScreen();
  });

  it("handles press event", () => {
    const item = {
      id: "1",
      backgroundColor: "#CCDDAA",
      avatar: undefined,
      first_name: "Harry",
      last_name: "Potter",
      email: "harry.potter@hogwarts.com",
    };
    const onPressMock = jest.fn();

    render(<ListGridItem onPress={onPressMock} item={item} itemWidth={200} />);

    const listItemContainer = screen.getByTestId(
      "list-grid-item-container-test-id"
    );

    fireEvent.press(listItemContainer);

    expect(onPressMock).toHaveBeenCalled();
  });
});
