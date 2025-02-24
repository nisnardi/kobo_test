import { fireEvent, render, screen } from "@testing-library/react-native";
import { Header } from "../Header";

describe("Header component", () => {
  it("renders title and icons", () => {
    render(
      <Header
        isAvatarFilterEnabled
        onPressGrid={() => {}}
        onPressList={() => {}}
        onPressSort={() => {}}
        onPressAvatarFilter={() => {}}
      />
    );
    const icons = screen.queryAllByTestId("header-icon-test-id");

    expect(icons.length).toBe(5);
    expect(screen.getByText("User List")).toBeOnTheScreen();
  });

  it("renders title and icons", () => {
    const onPressGridMock = jest.fn();
    const onPressListMock = jest.fn();
    const onPressSortMock = jest.fn();
    const onPressAvatarFilterMock = jest.fn();

    render(
      <Header
        isAvatarFilterEnabled
        onPressGrid={onPressGridMock}
        onPressList={onPressListMock}
        onPressSort={onPressSortMock}
        onPressAvatarFilter={onPressAvatarFilterMock}
      />
    );

    const icons = screen.queryAllByTestId("header-icon-test-id");

    fireEvent.press(icons[0]);
    fireEvent.press(icons[1]);
    fireEvent.press(icons[2]);
    fireEvent.press(icons[3]);
    fireEvent.press(icons[4]);

    expect(onPressGridMock).toHaveBeenCalled();
    expect(onPressListMock).toHaveBeenCalled();
    expect(onPressSortMock).toHaveBeenCalledTimes(2);
    expect(onPressAvatarFilterMock).toHaveBeenCalled();
  });
});
