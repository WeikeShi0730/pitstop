import { render, RenderResult } from "@testing-library/react";
import OrderHistoryDisclosure from "../components/order-history-disclosure.component";

let documentBody: RenderResult;
describe("<OrderHistoryDisclosure />", () => {
  beforeEach(
    () =>
      (documentBody = render(
        <OrderHistoryDisclosure
          orderHistoryItem={{
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
          }}
        />
      ))
  );
  it("Test <OrderHistoryDisclosure />", () => {
    expect(documentBody.queryByText("2022-02-22")).toBeInTheDocument();

    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
