import {
  render,
  RenderResult,
  screen,
  fireEvent,
} from "@testing-library/react";
import Contact from "../components/contact.component";

let documentBody: RenderResult;
describe("<Contact />", () => {
  it("shows basic fields in <Contact />", () => {
    documentBody = render(<Contact submitForm={() => {}} />);
    expect(
      documentBody.getByRole("heading", { name: /Contact us/i })
    ).toBeInTheDocument();
    expect(
      documentBody.getByRole("textbox", { name: /name/i })
    ).toBeInTheDocument();
    expect(
      documentBody.getByRole("textbox", { name: /email/i })
    ).toBeInTheDocument();
    expect(
      documentBody.getByRole("textbox", { name: /message/i })
    ).toBeInTheDocument();
    expect(
      documentBody.getByRole("button", { name: /submit/i })
    ).toBeInTheDocument();

    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });

  it("Email field in <Contact />", () => {
    documentBody = render(<Contact submitForm={() => {}} />);
    fireEvent.change(documentBody.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "Test Email",
      },
    });
    expect(
      (
        documentBody.getByRole("textbox", {
          name: /email/i,
        }) as HTMLInputElement
      ).value
    ).toBe("Test Email");
  });
  it("Message field in <Contact />", () => {
    const onSubmit = jest.fn();
    documentBody = render(<Contact submitForm={onSubmit} />);
    fireEvent.change(documentBody.getByRole("textbox", { name: /message/i }), {
      target: {
        value: "Test Message",
      },
    });
    expect(
      (
        documentBody.getByRole("textbox", {
          name: /message/i,
        }) as HTMLInputElement
      ).value
    ).toBe("Test Message");
    fireEvent.click(documentBody.getByRole("button", { name: /submit/i }));
    // expect(onSubmit).toBeCalled();
  });
});
