import { ProfileCard } from "@/components/profile-card";
import { ProjectCard } from "@/components/project-card";
import { RightNav } from "@/components/right-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <RightNav />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          {/* Left Column - Fixed Profile */}
          <div className="hidden lg:block w-[400px] relative">
            <ProfileCard />
          </div>

          {/* Mobile Profile (visible only on small screens) */}
          <div className="lg:hidden w-full mt-8">
            <div className="relative w-full flex flex-col gap-6 p-8 rounded-3xl bg-card border border-border/50 shadow-xl">
              {/* Simplified content for mobile if needed, or just reuse components structure but not fixed */}
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Carlos</h1>
                <span className="text-xs font-medium text-muted-foreground">Full-Stack JavaScript Developer</span>
              </div>
              {/* ... rest of profile content ... */}
              <p className="text-sm text-muted-foreground">Check desktop view for full experience</p>
            </div>
          </div>

          {/* Right Column - Scrollable Content */}
          <div className="flex-1 py-8 lg:pl-8">
            {/* Header / Theme Toggle */}
            <div className="flex justify-end mb-12">
              <ThemeToggle />
            </div>

            {/* Introduction Section */}
            <section id="home" className="mb-20 pt-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/30 text-sm font-medium mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Introduction
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-8">
                I'm Carlos <br />
                Full-Stack JavaScript <br />
                Developer.
              </h1>

              <div className="flex flex-wrap gap-4 mb-12">
                <button className="px-8 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors cursor-pointer">
                  Download CV
                </button>
                <button className="px-8 py-3 rounded-full border border-border/50 bg-background hover:bg-secondary transition-colors font-medium cursor-pointer">
                  Download Cover Letter
                </button>
              </div>

              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                I specialize in building digital experiences that are not only visually stunning but also highly functional and accessible.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                <div className="p-6 rounded-2xl bg-card border border-border/50">
                  <h3 className="text-3xl font-bold mb-1">30+</h3>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border/50">
                  <h3 className="text-3xl font-bold mb-1">05+</h3>
                  <p className="text-sm text-muted-foreground">Years Of Experience</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border/50">
                  <h3 className="text-3xl font-bold mb-1">50+</h3>
                  <p className="text-sm text-muted-foreground">Projects Done</p>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-20">
              <div className="flex items-center justify-between mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Projects
                </div>
                <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                  View All Projects →
                </a>
              </div>

              <h2 className="text-3xl font-bold mb-8">My Featured Projects</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard
                  title="E-Commerce Dashboard"
                  category="Web Application"
                  image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                />
                <ProjectCard
                  title="Finance App"
                  category="Mobile Design"
                  image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop"
                />
                <ProjectCard
                  title="Travel Platform"
                  category="UI/UX Design"
                  image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2340&auto=format&fit=crop"
                />
                <ProjectCard
                  title="Portfolio Template"
                  category="Development"
                  image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2340&auto=format&fit=crop"
                />
              </div>
            </section>

            {/* About / Contact Placeholder */}
            <section id="about" className="mb-20">
              <div className="p-12 rounded-3xl bg-secondary/30 border border-border/50 text-center">
                <h2 className="text-2xl font-bold mb-4">Let's work together</h2>
                <p className="text-muted-foreground mb-6">Available for freelance projects</p>
                <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                  Contact Me
                </button>
              </div>
            </section>

            <footer className="py-8 border-t border-border/50 text-center text-sm text-muted-foreground">
              © 2024 David. All rights reserved.
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
