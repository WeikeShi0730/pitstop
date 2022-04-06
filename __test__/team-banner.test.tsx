import { render, RenderResult } from "@testing-library/react";
import TeamBanner from "../components/team-banner.component";

let documentBody: RenderResult;
describe("<TeamBanner />", () => {
  beforeEach(() => {
    documentBody = render(
      <TeamBanner
        backgroundImg={"test img"}
        name={"test name"}
        id={"test id"}
      />
    );
  });
  it("shows content in <TeamsBanner />", () => {
    expect(documentBody.getByText("Shop test name")).toBeInTheDocument();
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
