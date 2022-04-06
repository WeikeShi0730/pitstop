import { render, RenderResult } from "@testing-library/react";
import ProductsList from "../components/products-list.component";

let documentBody: RenderResult;
describe("<ProductsList />", () => {
  it("Test empty <ProductsList />", () => {
    documentBody = render(<ProductsList productsList={[]} />);
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
  //   it("Test products in <ProductsList />", () => {
  //     documentBody = render(
  //       <ProductsList
  //         productsList={[
  //           {
  //             id: "test-id-1",
  //             imageUrl: "test",
  //             name: "test name 1",
  //             price: 2,
  //             featured: false,
  //             sold: 0,
  //             teamId: "test-team-1",
  //           },
  //         ]}
  //       />
  //     );
  // expect(documentBody.queryByText("test name 1")).toBeInTheDocument();
  // expect(documentBody.queryByText("2")).toBeInTheDocument();
  // expect(documentBody.queryByText("test name 2")).toBeInTheDocument();
  // expect(documentBody.queryByText("3")).toBeInTheDocument();
  // expect(documentBody.queryByText("All products:")).toBeInTheDocument();
  //     const { baseElement } = documentBody;
  //     expect(baseElement).toMatchSnapshot();
  //   });
});
