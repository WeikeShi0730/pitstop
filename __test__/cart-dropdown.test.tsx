import { render, RenderResult } from "@testing-library/react";
import CartDropdown from "../components/cart-dropdown.component";

let documentBody: RenderResult;
describe("<CartDropdown />", () => {
  it("shows empty content in <CartDropdown />", () => {
    documentBody = render(<CartDropdown cartItems={[]} />);
    expect(documentBody.getByText("Your cart is empty.")).toBeInTheDocument();
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });

  it("shows content in <CartDropdown />", () => {
    documentBody = render(
      <CartDropdown
        cartItems={[
          {
            product: {
              imageUrl: "test",
              name: "",
              price: 0,
              id: "",

              featured: false,
              sold: 0,
              teamId: "",
            },
            count: 0,
          },
        ]}
      />
    );
    expect(documentBody.queryByText("Checkout")).toBeInTheDocument();
  });
});
