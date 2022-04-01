import {
  render,
  RenderResult,
  screen,
  fireEvent,
} from "@testing-library/react";
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

  it("shows <CartIcon /> on click", () => {
    documentBody = render(<CartIcon cartItems={[]} />);
    expect(screen.queryByText("Checkout")).not.toBeInTheDocument();
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.queryByText("Checkout")).toBeInTheDocument();
  });
});
