import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { HeroSection } from "@/components/features/hero/HeroSection";
import { AboutSection } from "@/components/features/about/AboutSection";
import { WorkEducationSection } from "@/components/features/education/WorkEducationSection";
import { SkillsSection } from "@/components/features/skills/SkillsSection";
import { ContactSection } from "@/components/features/contact/ContactSection";
import ProjectsSection from "@/components/features/projects/ProjectsSection";
import { sanityFetch } from "@/sanity/lib/live";
import { portfolioQuery } from "@/sanity/lib/queries";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { PortfolioData } from "@/types/sanity";
import { ReviewsSection } from "@/components/features/reviews/ReviewsSection";
import { ProfileCard } from "@/components/layout/profile-card";
import { RightNav } from "@/components/layout/right-nav";

export default async function Home() {

  const { data } = await sanityFetch({ query: portfolioQuery }) as { data: PortfolioData | null };
  console.log(data);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <ScrollToTop />
      <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <RightNav />

        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Mobile Theme Toggle */}
            <div className="flex justify-end lg:hidden mt-4 px-4">
              <ThemeToggle />
            </div>

            {/* Left Column - Fixed Profile */}
            <div className="w-full lg:w-[400px] relative px-4 lg:px-0">
              {/*profile*/}
              <ProfileCard data={data.profile} />
            </div>

            {/* Right Column - Scrollable Content */}
            <div className="flex-1 py-8 lg:pl-8">
              {/* Header / Theme Toggle (Desktop) */}
              <div className="hidden lg:flex justify-end mb-12">
                <ThemeToggle />
              </div>

              {/* Sections */}
              <section id="home">
                <HeroSection data={data.introduction} />
              </section>
              <section id="about">
                <AboutSection data={data.about} />
              </section>
              <section id="projects">
                <ProjectsSection projects={data.projects} />
              </section>
              <section id="work-education">
                <WorkEducationSection data={data.resume} />
              </section>
              <section id="reviews">
                <ReviewsSection />
              </section>
              <section id="contact">
                <ContactSection />
              </section>

              <footer className="py-8 border-t border-border/50 text-center text-sm text-muted-foreground">
                © 2025 Carlos Aracena. All rights reserved.
              </footer>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
