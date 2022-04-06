import { render, RenderResult, fireEvent } from "@testing-library/react";
import SignIn from "../components/sign-in.component";
import createMockRouter from "../test-utils/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

let documentBody: RenderResult;
describe("<SignIn />", () => {
  it("Test <SignIn />", () => {
    documentBody = render(<SignIn />);
    expect(
      documentBody.getByText("Alrady have an account? Sign in 🔐")
    ).toBeInTheDocument();
    expect(
      documentBody.getAllByRole("button", { name: /Sign in/i })
    ).toHaveLength(2);

    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
  it("Test click router <SignIn />", () => {
    const router = createMockRouter({});
    documentBody = render(
      <RouterContext.Provider value={router}>
        <SignIn />
      </RouterContext.Provider>
    );
    fireEvent.click(
      documentBody.getByRole("button", { name: /Forgot password?/i })
    );
    expect(router.push).toHaveBeenCalledWith("/reset-password");
  });
});
