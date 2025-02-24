import { render, screen } from "@testing-library/react-native";
import { EmptyList } from "../EmptyList";

describe("EmptyList component", () => {
  it("shows message", () => {
    const message = "No items found";
    render(<EmptyList message={message} />);
    expect(screen.getByText(message)).toBeOnTheScreen();
  });
});
