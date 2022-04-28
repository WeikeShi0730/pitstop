import { render, RenderResult } from "@testing-library/react";
import SignOut from "../components/sign-out.component";

let documentBody: RenderResult;
describe("<SignOut />", () => {
  it("Test <SignOut />", () => {
    documentBody = render(<SignOut />);
    expect(documentBody.getByText("Sign out")).toBeInTheDocument();

    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
