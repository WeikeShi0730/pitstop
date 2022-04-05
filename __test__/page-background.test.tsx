import { render, RenderResult } from "@testing-library/react";
import PageBackground from "../components/page-background.component";

let documentBody: RenderResult;
describe("<PageBackground />", () => {
  beforeEach(
    () =>
      (documentBody = render(
        <PageBackground
          info={{ teamBackgrounds: ["test"], fullname: "test name" }}
        />
      ))
  );
  it("Test <PageBackground />", () => {
    expect(documentBody.queryByText("test name")).toBeInTheDocument();
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
