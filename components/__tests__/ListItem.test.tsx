import { fireEvent, render, screen } from "@testing-library/react-native";
import { ListItem } from "../ListItem";

describe("ListItem component", () => {
  it("renders item with all properties", () => {
    const item = {
      id: "1",
      backgroundColor: "#CCDDAA",
      avatar: undefined,
      first_name: "Harry",
      last_name: "Potter",
      email: "harry.potter@hogwarts.com",
    };

    render(<ListItem onPress={() => {}} item={item} />);

    expect(screen.getByText("Harry Potter")).toBeOnTheScreen();
    expect(screen.getByText("harry.potter@hogwarts.com")).toBeOnTheScreen();
    expect(screen.getByTestId("list-item-container-test-id")).toHaveStyle({
      backgroundColor: "#CCDDAA",
    });
    expect(
      screen.getByTestId("list-item-image-container-test-id")
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

    render(<ListItem onPress={() => {}} item={item} />);

    expect(screen.getByText("Harry")).toBeOnTheScreen();
    expect(screen.getByText("harry.potter@hogwarts.com")).toBeOnTheScreen();
    expect(screen.getByTestId("list-item-container-test-id")).toHaveStyle({
      backgroundColor: "#CCDDAA",
    });
    expect(
      screen.getByTestId("list-item-image-container-test-id")
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

    render(<ListItem onPress={onPressMock} item={item} />);

    const listItemContainer = screen.getByTestId("list-item-container-test-id");

    fireEvent.press(listItemContainer);

    expect(onPressMock).toHaveBeenCalled();
  });
});
