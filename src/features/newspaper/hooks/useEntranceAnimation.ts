import { useEffect } from "react";
import { useAnimationControls } from "motion/react";
import { useAtom, useAtomValue } from "jotai";
import { animationPhaseAtom, isExpandedAtom } from "../store";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function useEntranceAnimation() {
  const controls = useAnimationControls();
  const [, setPhase] = useAtom(animationPhaseAtom);
  const isExpanded = useAtomValue(isExpandedAtom);

  useEffect(() => {
    const runSequence = async () => {
      await delay(200);

      setPhase("sliding");
      await controls.start({
        y: "60vh",
        transition: { duration: 2.5, ease: [0.22, 1, 0.36, 1] },
      });

      await delay(200);

      setPhase("rotating");
      await controls.start({
        rotate: -1080,
        transition: { duration: 2, ease: [0.4, 0, 0.2, 1] },
      });

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
  }, [controls, setPhase]);

  return { controls, isExpanded };
}
