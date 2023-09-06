import { render, screen } from "@testing-library/react";
import Home from "@/src/pages/index";

describe("Home", () => {
  it("renders the default Next.js page", () => {
    render(<Home />);

    const logo = screen.getByRole("img", {
      name: /Vercel Logo/i,
    });

    expect(logo).toBeInTheDocument();
  });
});


// ListItems component
// it ("should render its content correctly")

// ListItems component should render its content correctly