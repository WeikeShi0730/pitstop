import { render, RenderResult } from "@testing-library/react";
import Pagination from "../components/pagination.component";

let documentBody: RenderResult;
describe("<Pagination />", () => {
  beforeEach(
    () =>
      (documentBody = render(
        <Pagination
          setCurrentPage={() => {}}
          numPages={10}
          currentPage={1}
          scroll={0}
        />
      ))
  );
  it("Test <Pagination />", () => {
    expect(documentBody.queryByText("0")).not.toBeInTheDocument();
    expect(documentBody.queryByText("1")).toBeInTheDocument();
    expect(documentBody.queryByText("10")).toBeInTheDocument();
    expect(documentBody.queryByText("11")).not.toBeInTheDocument();
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
