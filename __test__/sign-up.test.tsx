import { render, RenderResult } from "@testing-library/react";
import SignUp from "../components/sign-up.component";

let documentBody: RenderResult;
describe("<SignUp />", () => {
  it("Test <SignUp />", () => {
    documentBody = render(<SignUp />);
    expect(
      documentBody.getByRole("button", { name: /Sign up/i })
    ).toBeInTheDocument();

    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
