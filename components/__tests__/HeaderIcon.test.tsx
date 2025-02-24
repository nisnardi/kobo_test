import { fireEvent, render, screen } from "@testing-library/react-native";
import { HeaderIcon } from "../HeaderIcon";
import { COLORS } from "@/constants/Colors";

describe("HeaderIcon component", () => {
  it("renders icon", () => {
    const mockImage = { uri: "placeholder_image_path" };
    render(<HeaderIcon iconSource={mockImage} onPress={() => {}} />);
    const headerIcon = screen.getByTestId("header-icon-test-id");
    expect(headerIcon).toBeOnTheScreen();
  });

  it("handles press event", () => {
    const mockImage = { uri: "placeholder_image_path" };
    const onPressMock = jest.fn();
    render(<HeaderIcon iconSource={mockImage} onPress={onPressMock} />);
    const headerIcon = screen.getByTestId("header-icon-test-id");
    fireEvent.press(headerIcon);

    expect(onPressMock).toHaveBeenCalled();
  });

  it("renders selected icon", () => {
    const mockImage = { uri: "placeholder_image_path" };
    render(<HeaderIcon iconSource={mockImage} selected onPress={() => {}} />);
    const headerIconContainer = screen.getByTestId(
      "header-icon-container-test-id"
    );

    expect(headerIconContainer).toHaveStyle({ backgroundColor: COLORS.active });
  });
});
