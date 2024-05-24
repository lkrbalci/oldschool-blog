import { render, screen } from "@testing-library/react";
import Navbar from "@/components/navBar/navBar"; // Adjust the path as needed

describe("Navbar component", () => {
  test("renders logo", () => {
    render(<Navbar />);
    const logoElement = screen.getByAltText("Rootifera Logo");
    expect(logoElement).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(<Navbar />);
    const hLinks = screen.getAllByRole("link", { name: /H:/i });
    const cLinks = screen.getAllByRole("link", { name: /C:/i });
    const aLinks = screen.getAllByRole("link", { name: /A:/i });

    expect(hLinks.length).toBeGreaterThan(0);
    expect(cLinks.length).toBeGreaterThan(0);
    expect(aLinks.length).toBeGreaterThan(0);
  });

  test("renders social media icons", () => {
    render(<Navbar />);
    const githubIcon = screen.getByAltText("GitHub icon");
    const instagramIcon = screen.getByAltText("Instagram icon");
    const linkedinIcon = screen.getByAltText("LinkedIn icon");

    expect(githubIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
  });
});
