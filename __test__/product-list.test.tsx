import { render, RenderResult } from "@testing-library/react";
import ProductsList from "../components/products-list.component";
import createMockRouter from "../test-utils/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

let documentBody: RenderResult;

describe("<ProductsList />", () => {
  it("Test empty <ProductsList />", () => {
    documentBody = render(
      <RouterContext.Provider value={createMockRouter({})}>
        <ProductsList productsList={[]} />
      </RouterContext.Provider>
    );
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
  it("Test products in <ProductsList />", () => {
    documentBody = render(
      <RouterContext.Provider value={createMockRouter({})}>
        <ProductsList
          productsList={[
            {
              id: "test-id-1",
              imageUrl: "test",
              name: "test name 1",
              price: 2,
              featured: false,
              sold: 0,
              teamId: "test-team-1",
            },
            {
              id: "test-id-2",
              imageUrl: "test",
              name: "test name 2",
              price: 3,
              featured: false,
              sold: 0,
              teamId: "test-team-2",
            },
          ]}
        />
      </RouterContext.Provider>
    );
    expect(documentBody.queryByText("test name 1")).toBeInTheDocument();
    expect(documentBody.queryByText("2")).toBeInTheDocument();
    expect(documentBody.queryByText("test name 2")).toBeInTheDocument();
    expect(documentBody.queryByText("3")).toBeInTheDocument();
    expect(documentBody.queryByText("All products:")).toBeInTheDocument();
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
  it("Test search product in <ProductsList />", () => {
    documentBody = render(
      <RouterContext.Provider
        value={createMockRouter({ query: { name: "test name 1" } })}
      >
        <ProductsList
          productsList={[
            {
              id: "test-id-1",
              imageUrl: "test",
              name: "test name 1",
              price: 2,
              featured: false,
              sold: 0,
              teamId: "test-team-1",
            },
          ]}
        />
      </RouterContext.Provider>
    );
    expect(documentBody.queryByText("test name 1")).toBeInTheDocument();
    expect(documentBody.queryByText("2")).toBeInTheDocument();
  });
  it("Test search non-existing product in <ProductsList />", () => {
    documentBody = render(
      <RouterContext.Provider
        value={createMockRouter({ query: { name: "random stuff" } })}
      >
        <ProductsList
          productsList={[
            {
              id: "test-id-1",
              imageUrl: "test",
              name: "test name 1",
              price: 2,
              featured: false,
              sold: 0,
              teamId: "test-team-1",
            },
          ]}
        />
      </RouterContext.Provider>
    );
    expect(documentBody.queryByText("test name 1")).not.toBeInTheDocument();
  });
});
