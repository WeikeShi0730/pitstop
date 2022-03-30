import { render, RenderResult } from "@testing-library/react";
import TeamsBanners from "../components/teams-banners.component";

let documentBody: RenderResult;
describe("<TeamsBanners />", () => {
  beforeEach(() => {
    const teams = [
      {
        id: "test",
        name: "test",
        teamBackgrounds: [],
        teamBanner: "test",
      },
    ];
    documentBody = render(<TeamsBanners teams={teams} />);
  });
  it("shows content in <TeamsBanners />", () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
