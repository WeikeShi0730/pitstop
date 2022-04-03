import { render, RenderResult } from "@testing-library/react";
import Nav from "../components/nav.component";

let documentBody: RenderResult;
describe("<Nav />", () => {
  it("shows basic fields in <Nav />", () => {
    documentBody = render(<Nav currentUser={null} cartItems={[]} />);

    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
