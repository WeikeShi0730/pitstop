import { render } from "@testing-library/react";
import About from "../components/about.component";

test("On render 'about' component", () => {
  render(<About />);
  // screen.debug();
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
});
