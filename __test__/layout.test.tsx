import { render, RenderResult } from "@testing-library/react";
import Layout from "../components/layout.component";

let documentBody: RenderResult;
describe("<Layout />", () => {
  beforeEach(() => (documentBody = render(<Layout title="test" />)));
  it("shows basic fields in <Layout />", () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
