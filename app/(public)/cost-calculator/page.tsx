import type { Metadata } from "next";
import CostCalculator from "./CostCalculator"; // adjust path if needed

export const metadata: Metadata = {
  title: "Free Website & SEO Cost Calculator Tool | Codexa Digital",
  description:
    "Curious about website and SEO pricing? Try our free cost calculator to get fast, accurate, and hassle-free estimates today.",
};

export default function Page() {
  return <CostCalculator />;
}
