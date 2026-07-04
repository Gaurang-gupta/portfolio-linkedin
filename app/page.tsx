import { EngineeringPrinciples } from "@/components/sections/engineering-principles";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EngineeringPrinciples />
      <FeaturedProjects />
    </>
  );
}
