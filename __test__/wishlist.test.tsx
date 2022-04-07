import { render, RenderResult } from "@testing-library/react";
import Wishlist from "../components/wishlist.component";

let documentBody: RenderResult;
describe("<Wishlist />", () => {
  it("shows empty in <Wishlist />", () => {
    documentBody = render(<Wishlist wishlistItems={[]} />);
    expect(
      documentBody.getByText("Your wishlist is empty!")
    ).toBeInTheDocument();
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
  it("shows content in <Wishlist />", () => {
    documentBody = render(
      <Wishlist
        wishlistItems={[
          {
            imageUrl: "test img",
            name: "test name",
            price: 0,
            id: "test id",
            featured: false,
            sold: 0,
            teamId: "test team id",
          },
        ]}
      />
    );
    expect(documentBody.getByText("My wishlist")).toBeInTheDocument();
    expect(documentBody.getByText("test name")).toBeInTheDocument();
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
