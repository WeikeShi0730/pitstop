import { render, RenderResult } from "@testing-library/react";
import AccountOverview from "../components/account-overview.component";

let documentBody: RenderResult;
describe("<AccountOverview />", () => {
  beforeEach(() => {
    documentBody = render(
      <AccountOverview
        currentUser={null}
        orderHistoryItems={[]}
        setCurrentSelection={() => {}}
      />
    );
  });
  it("shows content in <AccountOverview />", () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
