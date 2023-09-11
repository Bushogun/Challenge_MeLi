// Testing
import { renderWithProviders } from "@/src/utils/test-utils";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/dom";
import { fireEvent } from "@testing-library/react";

// Component
import { SearchBarForm } from "@/src/components/navbar/search-bar-form/search-bar-form";

jest.mock("@/src/hooks/useProductData", () => {
  const originalModule = jest.requireActual("@/src/hooks/useProductData");
  //Mock the default export
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => {}),
  };
});

describe("SearchBarForm component", () => {
  it("should render correctly ", () => {
    const { container } = renderWithProviders(<SearchBarForm />);
    expect(container).toMatchSnapshot();
  });

  it("should set value to search query when emit onchange from input", async () => {
    const user = userEvent.setup();
    renderWithProviders(<SearchBarForm />);

    const input = screen.getByAltText("search product");
    const query = "iphone";

    await user.type(input, query);

    expect(input).toHaveValue(query);
  });

  it("should save value to search query when submit form", async () => {
    const user = userEvent.setup();
    const { store } = renderWithProviders(<SearchBarForm />);

    const input = screen.getByAltText("search product");
    const query = "iphone";

    await user.type(input, query);

    fireEvent.submit(screen.getByRole("form", { name: "form-search" }));

    const stateQuery = store.getState().product.searchQuery;

    expect(input).toHaveValue(query);
    expect(stateQuery).toBe(query);
  });
});
