import { render, RenderResult } from "@testing-library/react";
import Checkout from "../components/checkout.component";

jest.mock("./__mock__/mocked-hoc.component");

let documentBody: RenderResult;
describe("<Checkout />", () => {
  it("shows content in <Checkout />", () => {
    documentBody = render(<Checkout cartItems={[]} />);

    expect(documentBody.queryByText("0.72")).toBeInTheDocument();
    expect(documentBody.queryByText("7.20")).toBeInTheDocument();
    expect(documentBody.queryByText("0.55")).toBeInTheDocument();
    expect(documentBody.queryByText("1.10")).toBeInTheDocument();

    const total = documentBody.queryAllByText("8.30");
    expect(total.length).toBe(2);
    const component = total[0];
    expect(component).toBeInTheDocument();
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
