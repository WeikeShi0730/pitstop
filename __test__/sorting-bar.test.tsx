import { render, RenderResult } from "@testing-library/react";
import SortingBar from "../components/sorting-bar.component";

let documentBody: RenderResult;
describe("<SortingBar />", () => {
  beforeEach(
    () => (documentBody = render(<SortingBar handleChange={() => {}} />))
  );
  it("Test <SortingBar />", () => {
    expect(documentBody.getByText("Popular")).toBeInTheDocument();
    expect(documentBody.getByText("$")).toBeInTheDocument();
    expect(documentBody.getByText("$$$")).toBeInTheDocument();
    expect(documentBody.getByText("A-Z")).toBeInTheDocument();
    expect(documentBody.getByText("Z-A")).toBeInTheDocument();
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
