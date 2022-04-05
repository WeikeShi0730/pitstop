import { render, RenderResult } from "@testing-library/react";
import PageBackground from "../components/PageBackground.component";

let documentBody: RenderResult;
describe("<PageBackground />", () => {
  beforeEach(
    () =>
      (documentBody = render(
        <PageBackground
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
  it("Test <PageBackground />", () => {
    expect(documentBody.queryByText("2022-02-22")).toBeInTheDocument();

    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
