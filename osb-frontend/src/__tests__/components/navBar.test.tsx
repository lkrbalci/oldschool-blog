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
    const homeLink = screen.getByRole("link", { name: /H:/i });
    const contactLink = screen.getByRole("link", { name: /C:/i });
    const aboutLink = screen.getByRole("link", { name: /A:/i });

    expect(homeLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
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
