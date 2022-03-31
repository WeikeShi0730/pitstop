import { render, RenderResult } from "@testing-library/react";
import CartIcon from "../components/cart-icon.component";

let documentBody: RenderResult;
describe("<CartIcon />", () => {
  it("shows empty in <CartIcon />", () => {
    documentBody = render(<CartIcon cartItems={[]} />);
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });

  it("shows content in <CartIcon />", () => {
    documentBody = render(
      <CartIcon
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
            count: 10,
          },
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
            count: 5,
          },
        ]}
      />
    );
    expect(documentBody.queryByText("15")).toBeInTheDocument();
  });
});
