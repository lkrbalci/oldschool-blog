// FeaturedArticleCard.test.tsx

import { render, screen } from "@testing-library/react";
import FeaturedArticleCard from "@/components/featuredArticleCard/featuredArticleCard"; // Adjust the path as needed

describe("FeaturedArticleCard component", () => {
  test("renders image with alt text", () => {
    render(<FeaturedArticleCard />);
    const imageElement = screen.getByAltText(/header by Lorenzo Herrera/i);
    expect(imageElement).toBeInTheDocument();
  });

  test("renders article title", () => {
    render(<FeaturedArticleCard />);
    const titleElement = screen.getByText(/❤ OLD COMPUTERS ❤/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders article subtitle", () => {
    render(<FeaturedArticleCard />);
    const subtitleElement = screen.getByText(/Better Than Those/i);
    expect(subtitleElement).toBeInTheDocument();
  });

  test("renders category text", () => {
    render(<FeaturedArticleCard />);
    const categoryElement = screen.getByText(/arcade/i);
    expect(categoryElement).toBeInTheDocument();
  });
});
