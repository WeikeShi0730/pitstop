import {
  render,
  RenderResult,
  screen,
  fireEvent,
} from "@testing-library/react";
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
    // need to sign in firebase first
    expect(await screen.findByDisplayValue("10")).toBeInTheDocument();
    expect(await screen.findByText("test name")).toBeInTheDocument();
    const button = await screen.findByRole("button", { name: /⊕/i });
    // fireEvent.click(button);
    // expect(await screen.findByDisplayValue("11")).toBeInTheDocument();
  });
  it("shows <CheckoutItem /> remove on click", async () => {
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
    // need to sign in firebase first
    expect(await screen.findByDisplayValue("10")).toBeInTheDocument();
    expect(await screen.findByText("test name")).toBeInTheDocument();
    const button = await screen.findByRole("button", { name: /⊖/i });
    // fireEvent.click(button);
    // expect(await screen.findByDisplayValue("9")).toBeInTheDocument();
  });
  it("shows <CheckoutItem /> delete on click", async () => {
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
    // need to sign in firebase first
    expect(await screen.findByDisplayValue("10")).toBeInTheDocument();
    expect(await screen.findByText("test name")).toBeInTheDocument();
    const button = await screen.findByRole("button", { name: /🅧/i });
    // fireEvent.click(button);
    // expect(await screen.findByDisplayValue("9")).toBeInTheDocument();
  });
});
