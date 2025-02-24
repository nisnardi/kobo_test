import { render, screen } from "@testing-library/react-native";
import { Loader } from "../Loader";

describe("Loader component", () => {
  it("shows loading spinner", () => {
    render(<Loader />);

    expect(screen.getByTestId("loading-test-id")).toBeOnTheScreen();
  });
});
