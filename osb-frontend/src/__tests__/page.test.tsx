import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home component", () => {
  test('renders hero section with title "Retro Tech Something"', () => {
    render(<Home />);
    const heroTitle = screen.getByText(/Retro Tech Something/i);
    expect(heroTitle).toBeInTheDocument();
  });

  test("renders featured article card", () => {
    render(<Home />);
    const featuredArticle = screen.getByText(/Ma Precious Post:/i);
    expect(featuredArticle).toBeInTheDocument();
  });

  test("renders latest posts section", () => {
    render(<Home />);
    const latestPosts = screen.getByText(/Ma Latest Posts:/i);
    expect(latestPosts).toBeInTheDocument();
  });

  test("renders more section", () => {
    render(<Home />);
    const moreSection = screen.getByText(/More:/i);
    expect(moreSection).toBeInTheDocument();
  });
});
