import { render, RenderResult, screen } from "@testing-library/react";
import Checkout from "../components/checkout.component";
import { CartItemType } from "../interfaces/index";
jest.mock("../components/hoc.component", () => {
  const MockedWithSubscription = <P extends object>(
    Component: React.FunctionComponent<P>
  ) => {
    const useComponent = (props: P) => {
      const cartItems: CartItemType[] = [
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
          count: 2,
        },
        {
          product: {
            imageUrl: "test",
            name: "product2",
            price: 0.72,
            id: "product2",
            featured: false,
            sold: 0,
            teamId: "",
          },
          count: 10,
        },
      ];
      return (
        <Component
          {...(props as P)}
          cartItems={cartItems}
        />
      );
    };
    return useComponent;
  };
  return MockedWithSubscription;
});

let documentBody: RenderResult;
describe("<Checkout />", () => {
  test("shows content in <Checkout />", () => {
    documentBody = render(<Checkout cartItems={[]} />);
    screen.debug();
    // expect(documentBody.queryByText("0.72")).toBeInTheDocument();
    // expect(documentBody.queryByText("7.20")).toBeInTheDocument();
    // expect(documentBody.queryByText("0.55")).toBeInTheDocument();
    // expect(documentBody.queryByText("1.10")).toBeInTheDocument();

    // const total = documentBody.queryAllByText("8.30");
    // expect(total.length).toBe(2);
    // const component = total[0];
    // expect(component).toBeInTheDocument();
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
