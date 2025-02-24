import { render, screen } from "@testing-library/react-native";
import { ListFooter } from "../ListFooter";

describe("ListFooter component", () => {
  const loadingMessage = "Loading...";

  it("renders loading indicator when loading", () => {
    render(<ListFooter message={loadingMessage} isLoading />);
    expect(screen.getByTestId("loading-test-id")).toBeOnTheScreen();
  });

  it("renders message when not loading", () => {
    render(<ListFooter message="Loading..." isLoading={false} />);
    expect(screen.getByText("Loading...")).toBeOnTheScreen();
  });
});
