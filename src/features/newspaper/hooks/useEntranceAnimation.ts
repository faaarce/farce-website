import { useState, useEffect } from "react";
import { useAnimationControls } from "motion/react";
import type { AnimationPhase } from "../types";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function useEntranceAnimation() {
  const controls = useAnimationControls();
  const [phase, setPhase] = useState<AnimationPhase>("initial");

  useEffect(() => {
    const runSequence = async () => {
      await delay(200);

      // Slide down
      setPhase("sliding");
      await controls.start({
        y: "60vh",
        transition: { duration: 2.5, ease: [0.22, 1, 0.36, 1] },
      });

      await delay(200);

      // Spin
      setPhase("rotating");
      await controls.start({
        rotate: -1080,
        transition: { duration: 2, ease: [0.4, 0, 0.2, 1] },
      });

      // Zoom to full
      setPhase("zooming");
      await controls.start({
        scale: 1,
        borderRadius: "0px",
        height: "100%",
        y: "0vh",
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
      });

      setPhase("expanded");
    };

    const timer = setTimeout(runSequence, 300);
    return () => clearTimeout(timer);
  }, [controls]);

  const isExpanded = phase === "expanded";

  return { controls, phase, isExpanded };
}
