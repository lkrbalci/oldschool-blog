import { render, screen } from "@testing-library/react";
import RootLayout from "../app/layout"; // Dosya yolunu projenize göre düzenleyin

describe("RootLayout component", () => {
  test("renders NavBar component", () => {
    render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    );
    const navBarElement = screen.getByRole("navigation");
    expect(navBarElement).toBeInTheDocument();
  });

  test("renders Footer component", () => {
    render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    );
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  test("renders SideBar component", () => {
    render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    );
    const sideBarElement = screen.getByTestId("sidebar");
    expect(sideBarElement).toBeInTheDocument();
  });

  test("renders children content", () => {
    render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    );
    const contentElement = screen.getByText(/Content/i);
    expect(contentElement).toBeInTheDocument();
  });
});
