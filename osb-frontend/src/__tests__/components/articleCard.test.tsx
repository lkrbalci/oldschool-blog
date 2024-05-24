import { render, screen } from "@testing-library/react";
import ArticleCard from "@/components/articleCard/articleCard"; // Adjust the path as needed

describe("ArticleCard component", () => {
  test("renders article title", () => {
    render(<ArticleCard />);
    const titleElement = screen.getByText(/Lorem, ipsum./i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders image with alt text", () => {
    render(<ArticleCard />);
    const imageElement = screen.getByAltText(/header by Lorenzo Herrera/i);
    expect(imageElement).toBeInTheDocument();
  });

  test("renders category text", () => {
    render(<ArticleCard />);
    const categoryElement = screen.getByText(/arcade/i);
    expect(categoryElement).toBeInTheDocument();
  });
});
