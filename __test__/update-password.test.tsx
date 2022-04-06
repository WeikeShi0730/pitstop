import { render, RenderResult } from "@testing-library/react";
import UpdatePassword from "../components/update-password.component";

let documentBody: RenderResult;
describe("<UpdatePassword />", () => {
  beforeEach(
    () => (documentBody = render(<UpdatePassword currentUser={null} />))
  );
  it("Test <UpdatePassword />", () => {
    expect(
      documentBody.getByRole("button", {
        name: /Send a password update email/i,
      })
    ).toBeInTheDocument();
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
