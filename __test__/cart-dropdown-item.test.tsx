import { render, RenderResult } from "@testing-library/react";
import CartDropdownItem from "../components/cart-dropdown-item.component";

let documentBody: RenderResult;
describe("<CartDropdownItem />", () => {
  beforeEach(() => {
    documentBody = render(
      <CartDropdownItem
        cartItem={{
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
        }}
      />
    );
  });
  it("shows content in <CartDropdownItem />", () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
