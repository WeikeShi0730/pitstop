import { render, RenderResult } from "@testing-library/react";
import OrderHistory from "../components/order-history.component";

let documentBody: RenderResult;
describe("<OrderHistory />", () => {
  beforeEach(
    () =>
      (documentBody = render(
        <OrderHistory
          orderHistoryItems={[
            {
              items: [
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
              ],
              timeStamp: "2022-02-22",
            },
          ]}
        />
      ))
  );
  it("Test <OrderHistory />", () => {
    expect(documentBody.queryByText("2022-02-22")).toBeInTheDocument();
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
