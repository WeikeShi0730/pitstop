import { render, RenderResult, fireEvent } from "@testing-library/react";
import SignOut from "../components/sign-out.component";
import createMockRouter from "../test-utils/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

let documentBody: RenderResult;
describe("<SignOut />", () => {
  it("Test <SignOut />", () => {
    documentBody = render(<SignOut />);
    expect(documentBody.getByText("Sign out")).toBeInTheDocument();

    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});