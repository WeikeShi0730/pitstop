import { render, RenderResult, screen } from "@testing-library/react";
import Checkout from "../components/checkout.component";

let documentBody: RenderResult;
describe("<Checkout />", () => {
  it("shows empty in <Checkout />", () => {
    documentBody = render(<Checkout cartItems={[]} />);
    expect(documentBody.queryByText("Your cart is empty!")).toBeInTheDocument();
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });

  it("shows content in <Checkout />", () => {
    documentBody = render(
      <Checkout
        cartItems={[
          {
            product: {
              imageUrl: "test",
              name: "product1",
              price: 0.55,
              id: "product1",
              featured: false,
              sold: 0,
              teamId: "",
            },
            count: 1,
          },
        ]}
      />
    );
    // fail because of hoc ?
    expect(documentBody.getByDisplayValue("0.55")).toBeInTheDocument();
  });
});
