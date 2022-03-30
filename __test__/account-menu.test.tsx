import { render, RenderResult } from "@testing-library/react";
import AccountMenu from "../components/account-menu.component";

let documentBody: RenderResult;
describe("<AccountMenu />", () => {
  beforeEach(() => {
    documentBody = render(
      <AccountMenu
        currentSelection={0}
        numWishlistItems={0}
        setCurrentSelection={() => {}}
      />
    );
  });
  it("shows content in <TeamsBanners />", () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
