import { render, RenderResult } from "@testing-library/react";
import SearchBar from "../components/search-bar.component";

let documentBody: RenderResult;
describe("<SearchBar />", () => {
  beforeEach(() => (documentBody = render(<SearchBar />)));
  it("Test <SearchBar />", () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
