import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import About from "../components/about.component";

let documentBody: RenderResult;
describe("<About />", () => {
  beforeEach(() => {
    documentBody = render(<About />);
  });
  it("shows content in <About />", () => {
    expect(documentBody.getByText("portfolio website")).toBeInTheDocument();
  });
});
