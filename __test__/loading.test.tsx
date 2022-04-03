import { render, RenderResult } from "@testing-library/react";
import Loading from "../components/loading.component";

let documentBody: RenderResult;
describe("<Loading />", () => {
  beforeEach(() => (documentBody = render(<Loading />)));
  it("Test <Layout />", () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
