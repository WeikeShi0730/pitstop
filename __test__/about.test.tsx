import { render, RenderResult } from "@testing-library/react";
import About from "../components/about.component";

let documentBody: RenderResult;
describe("<About />", () => {
  beforeEach(() => {
    documentBody = render(<About />);
  });
  it("shows content in <About />", () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
