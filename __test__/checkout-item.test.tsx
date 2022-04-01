import { render, RenderResult, screen } from "@testing-library/react";
import CheckoutItem from "../components/checkout-item.component";

let documentBody: RenderResult;
describe("<CheckoutItem />", () => {
  it("shows content in <CheckoutItem />", () => {
    documentBody = render(
      <CheckoutItem
        cartItem={{
          product: {
            imageUrl: "test",
            name: "test name",
            price: 0,
            id: "",
            featured: false,
            sold: 0,
            teamId: "",
          },
          count: 10,
        }}
      />
    );
    expect(documentBody.queryByText("test name")).toBeInTheDocument();
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });

  it("shows <CheckoutItem /> add on click", async () => {
    documentBody = render(
      <CheckoutItem
        cartItem={{
          product: {
            imageUrl: "test",
            name: "test name",
            price: 0,
            id: "",
            featured: false,
            sold: 0,
            teamId: "",
          },
          count: 10,
        }}
      />
    );
    expect(await screen.findByDisplayValue("10")).toBeInTheDocument();
    expect(await screen.findByText("test name")).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: /⊕/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: /⊖/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: /🅧/i })
    ).toBeInTheDocument();
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
