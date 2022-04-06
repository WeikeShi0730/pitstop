import { render, RenderResult } from "@testing-library/react";
import RestPassword from "../components/reset-password.component";

let documentBody: RenderResult;
describe("<RestPassword />", () => {
  beforeEach(() => (documentBody = render(<RestPassword />)));
  it("Test <RestPassword />", () => {
    expect(
      documentBody.queryByText("Send a password reset email")
    ).toBeInTheDocument();
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
