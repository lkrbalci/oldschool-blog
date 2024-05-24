// LatestArticleCard.test.tsx

import { render, screen } from "@testing-library/react";
import LatestArticleCard from "@/components/latestArticleCard/latestArticleCard";

describe("LatestArticleCard component", () => {
  test("renders article title", () => {
    const articleTitle = "Some Text";
    render(<LatestArticleCard />);
    const titleElement = screen.getByText(articleTitle, { exact: false });
    expect(titleElement).toBeInTheDocument();
  });

  test("renders category text", () => {
    const categoryText = "strategy";
    render(<LatestArticleCard />);
    const categoryElement = screen.getByText(categoryText, { exact: false });
    expect(categoryElement).toBeInTheDocument();
  });
});
