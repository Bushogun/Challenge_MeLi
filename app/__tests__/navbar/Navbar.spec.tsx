import { Navbar } from "@/src/components/navbar/Navbar";

import { useRouter } from "next/router";
import { renderWithProviders } from "@/src/utils/test-utils";

describe("Navbar component", () => {
  jest.mock("next/router", () => ({
    useRouter: jest.fn(),
  }));

  it("should render correctly ", () => {
    const { container } = renderWithProviders(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
