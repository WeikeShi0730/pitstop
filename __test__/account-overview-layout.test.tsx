import { render, RenderResult } from "@testing-library/react";
import AccountOverviewLayout from "../components/account-overview-layout.component";

let documentBody: RenderResult;
describe("<AccountOverviewLayout />", () => {
  beforeEach(() => {
    documentBody = render(
      <AccountOverviewLayout>
        <></>
      </AccountOverviewLayout>
    );
  });
  it("shows content in <AccountOverviewLayout />", () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
