import { render, screen } from "@testing-library/react";
import Categories from "@/components/categories/categories";

describe("Categories component", () => {
  test("renders categories with links", () => {
    render(<Categories />);

    const category1Link = screen.getByRole("link", { name: /category 1/i });
    const category2Link = screen.getByRole("link", { name: /category 2/i });
    const category3Link = screen.getByRole("link", { name: /category 3/i });
    const category4Link = screen.getByRole("link", { name: /category 4/i });

    expect(category1Link).toBeInTheDocument();
    expect(category2Link).toBeInTheDocument();
    expect(category3Link).toBeInTheDocument();
    expect(category4Link).toBeInTheDocument();
  });
});
