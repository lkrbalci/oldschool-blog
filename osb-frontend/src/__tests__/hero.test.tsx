import { render, screen } from "@testing-library/react";
import Hero from "@/components/hero/hero";
describe("Hero component", () => {
  test("renders title", () => {
    const title = "RETRO TECH SOMETHING";
    render(<Hero title={title} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });
});
