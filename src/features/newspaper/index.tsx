import type { FC } from "react";
import { Provider } from "jotai";
import { motion } from "motion/react";
import { useEntranceAnimation } from "./hooks/useEntranceAnimation";
import { SERIF_FONT } from "./styles/classNames";
import {
  Masthead,
  NameBanner,
  HeroSection,
  AboutSection,
  WebsiteBanner,
  EditorialColumns,
  StatsRow,
  FeaturedWorks,
  Ornament,
  ExperienceSection,
  TestimonialsSection,
  SkillsSection,
  BottomProjects,
  ContactSection,
  Marquee,
  Footer,
} from "./components";

const NewspaperContent: FC = () => {
  const { controls, isExpanded } = useEntranceAnimation();

  return (
    <div
      className={`bg-[#1a1a1a] min-h-screen w-full relative ${
        isExpanded ? "overflow-auto h-auto" : "overflow-hidden h-screen"
      }`}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1a1a1a] z-0 pointer-events-none transition-opacity duration-300"
        style={{ opacity: isExpanded ? 0 : 1 }}
        aria-hidden="true"
      />

      {/* Animation wrapper */}
      <div
        className={`z-[1] pointer-events-none ${
          isExpanded
            ? "relative"
            : "fixed inset-0 flex items-center justify-center"
        }`}
      >
        <motion.div
          animate={controls}
          initial={{
            y: "120vh",
            rotate: 0,
            scale: 0.45,
            borderRadius: "12px",
          }}
          className="w-full min-h-screen bg-[#d5d0c9] origin-center will-change-transform pointer-events-auto"
          style={{
            boxShadow: isExpanded
              ? "none"
              : "0 25px 80px rgba(0,0,0,0.6)",
          }}
        >
          <main
            className="max-w-[1200px] mx-auto px-7"
            style={{ fontFamily: SERIF_FONT }}
            role="main"
          >
            <header>
              <Masthead />
              <NameBanner />
            </header>

            <HeroSection />

            <Ornament />

            <AboutSection />

            <WebsiteBanner />
            <EditorialColumns />
            <StatsRow />

            <FeaturedWorks />
            <Ornament />

            <ExperienceSection />
            <TestimonialsSection />
            <SkillsSection />

            <BottomProjects />

            <ContactSection />

            <Marquee />

            <footer>
              <Footer />
            </footer>
          </main>
        </motion.div>
      </div>
    </div>
  );
};

/** Root wrapper — provides Jotai store context */
const NewspaperEntrance: FC = () => (
  <Provider>
    <NewspaperContent />
  </Provider>
);

export default NewspaperEntrance;
