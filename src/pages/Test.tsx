import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "motion/react";

const paperBg = { backgroundColor: "#d5d0c9" };
const serif = "'PP Editorial New', Georgia, serif";

/* ── tiny reusable bits ── */
const thinRule = { borderBottom: "1px solid #b5b0a8" };
const thickThinRule = { borderBottom: "3px double #2a2a2a" };
const colRule = { borderRight: "1px solid #b5b0a8" };
const sectionLabel = {
  fontFamily: serif,
  fontSize: 9,
  letterSpacing: 2.5,
  textTransform: "uppercase",
  color: "#999",
};

const Ornament = () => (
  <div style={{ textAlign: "center", padding: "6px 0", fontFamily: serif, fontSize: 11, color: "#b5b0a8", letterSpacing: 8 }}>
    ◆ ◆ ◆
  </div>
);

export default function NewspaperEntrance() {
  const controls = useAnimationControls();
  const [phase, setPhase] = useState("initial");

  useEffect(() => {
    const runSequence = async () => {
      await new Promise((r) => setTimeout(r, 200));
      setPhase("sliding");
      await controls.start({ y: "60vh", transition: { duration: 2.5, ease: [0.22, 1, 0.36, 1] } });
      await new Promise((r) => setTimeout(r, 200));
      setPhase("rotating");
      await controls.start({ rotate: -1080, transition: { duration: 2, ease: [0.4, 0, 0.2, 1] } });
      setPhase("zooming");
      await controls.start({ scale: 1, borderRadius: "0px", height: "100%", y: "0vh", transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } });
      setPhase("expanded");
    };
    const timer = setTimeout(runSequence, 300);
    return () => clearTimeout(timer);
  }, [controls]);

  const isExpanded = phase === "expanded";

  return (
    <div style={{ background: "#1a1a1a", minHeight: "100vh", width: "100%", overflow: isExpanded ? "auto" : "hidden", height: isExpanded ? "auto" : "100vh", position: "relative" }}>
      <div style={{ position: "fixed", inset: 0, background: "#1a1a1a", zIndex: 0, pointerEvents: "none", opacity: isExpanded ? 0 : 1, transition: "opacity 0.3s ease" }} />
      <div style={{ position: isExpanded ? "relative" : "fixed", inset: isExpanded ? "auto" : 0, zIndex: 1, display: isExpanded ? "block" : "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <motion.div
          animate={controls}
          initial={{ y: "120vh", rotate: 0, scale: 0.45, borderRadius: "12px" }}
          style={{ width: "100%", minHeight: "100vh", ...paperBg, transformOrigin: "center center", willChange: "transform", pointerEvents: "auto", boxShadow: isExpanded ? "none" : "0 25px 80px rgba(0,0,0,0.6)" }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}>

            {/* ═══════════════════════════════════════════════════════ */}
            {/*  MASTHEAD — authentic newspaper header                 */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div style={{ ...thinRule, padding: "10px 0 6px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ ...sectionLabel }}>VOL. I · NO. 1</span>
              <span style={{ ...sectionLabel }}>JAKARTA, INDONESIA</span>
              <span style={{ ...sectionLabel }}>EST. 2022</span>
            </div>

            {/* Title block */}
            <div style={{ textAlign: "center", padding: "20px 0 6px" }}>
              <div style={{ borderTop: "4px solid #2a2a2a", borderBottom: "1px solid #2a2a2a", padding: "4px 0", marginBottom: 6 }}>
                <div style={{ borderTop: "1px solid #2a2a2a", borderBottom: "4px solid #2a2a2a", padding: "14px 0" }}>
                  <h1 style={{ fontFamily: serif, fontSize: "clamp(36px,6vw,72px)", fontWeight: 800, color: "#2a2a2a", textTransform: "uppercase", letterSpacing: "0.08em", lineHeight: 1, margin: 0 }}>
                    THE PAPER PORTFOLIO
                  </h1>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, padding: "4px 0 0" }}>
                <span style={{ ...sectionLabel, fontSize: 8 }}>MOHAMMAD FARIS ARIE PRASETYO</span>
                <span style={{ color: "#b5b0a8" }}>★</span>
                <span style={{ ...sectionLabel, fontSize: 8 }}>SOFTWARE ENGINEER</span>
                <span style={{ color: "#b5b0a8" }}>★</span>
                <span style={{ ...sectionLabel, fontSize: 8 }}>PADJADJARAN UNIVERSITY</span>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #b5b0a8", marginTop: 8 }} />

            {/* ═══════════════════════════════════════════════════════ */}
            {/*  ABOVE-THE-FOLD: Giant Name + Hero                    */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div style={{ background: "#2a2a2a", padding: "clamp(20px,3.5vw,40px) clamp(16px,3vw,36px)", textAlign: "center", margin: "12px 0 0" }}>
              <h1 style={{ fontFamily: serif, fontSize: "clamp(72px,16vw,220px)", fontWeight: 800, color: "#d5d0c9", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 0.82, margin: 0 }}>FARIS</h1>
            </div>

            {/* Dateline row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", ...thinRule }}>
              <span style={{ fontFamily: serif, fontSize: 11, fontStyle: "italic", color: "#888" }}>Software Engineer · Jakarta, Indonesia</span>
              <span style={{ fontFamily: serif, fontSize: 11, fontStyle: "italic", color: "#888" }}>Page 1 of 1</span>
            </div>

            {/* ═══════════════════════════════════════════════════════ */}
            {/*  HERO — 2 column with column rule                     */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 0, ...thinRule }}>
              {/* Left col */}
              <div style={{ ...colRule, padding: "24px 24px 24px 0" }}>
                <div style={{ ...sectionLabel, marginBottom: 8 }}>SPECIAL REPORT</div>
                <h2 style={{ fontFamily: serif, fontSize: "clamp(32px,5.5vw,64px)", fontWeight: 800, textTransform: "uppercase", lineHeight: 0.9, color: "#2a2a2a", margin: "0 0 6px", letterSpacing: "-0.02em" }}>SOFTWARE<br />ENGINEER!</h2>
                <div style={{ width: 40, height: 3, background: "#2a2a2a", marginBottom: 18 }} />

                <img src="/faris1.png" alt="Illustration" style={{ width: "70%", aspectRatio: "4/5", objectFit: "cover", borderRadius: 0, marginBottom: 14, display: "block", border: "1px solid #b5b0a8" }} />

                <p style={{ fontFamily: serif, fontSize: 14, lineHeight: 1.65, color: "#333", margin: 0, textAlign: "justify", hyphens: "auto" }}>
                  <span style={{ float: "left", fontFamily: serif, fontSize: 58, fontWeight: 800, lineHeight: 0.75, marginRight: 6, marginTop: 6, color: "#2a2a2a" }}>A</span>
                  &nbsp;Computer Science graduate from Padjadjaran University with a strong foundation in software development. While my recent focus has been on iOS development, I have solid academic experience with Java, JavaScript, and database technologies. On the frontend side, I have hands-on experience building modern web interfaces using React.js, Next.js, and TypeScript.
                </p>
                <p style={{ fontFamily: serif, fontSize: 10, fontStyle: "italic", color: "#999", marginTop: 8, marginBottom: 0 }}>— By the editors of The Paper Portfolio</p>
              </div>

              {/* Right col */}
              <div style={{ padding: "24px 0 24px 24px" }}>
                <img src="/faris.png" alt="Mohammad Faris Arie Prasetyo" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block", background: "#a89e90", border: "1px solid #b5b0a8" }} />
                <p style={{ fontFamily: serif, fontSize: 9, fontStyle: "italic", color: "#999", margin: "6px 0 16px", textAlign: "center" }}>Mohammad Faris Arie Prasetyo — Jakarta, 2026</p>

                <div style={{ fontFamily: serif, fontWeight: 800, fontSize: "clamp(17px,3vw,30px)", textTransform: "uppercase", lineHeight: 1.25, color: "#2a2a2a", letterSpacing: "-0.01em" }}>
                  IOS DEVELOPER<br />FRONTEND ENGINEER<br />BACKEND DEVELOPER<br />
                  <span style={{ fontWeight: 400, fontStyle: "italic", fontSize: "clamp(13px,2vw,20px)", color: "#666" }}>Based in Jakarta, Indonesia</span>
                </div>

                {/* Pull quote */}
                <div style={{ margin: "24px 0 0", padding: "16px 0", borderTop: "2px solid #2a2a2a", borderBottom: "1px solid #b5b0a8" }}>
                  <p style={{ fontFamily: serif, fontSize: 18, fontStyle: "italic", color: "#2a2a2a", lineHeight: 1.4, margin: 0, textAlign: "center" }}>
                    &ldquo;Like an artisan, I start from raw code and give life to iconic products.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════ */}
            {/*  WEBSITE BANNER + ID STAMP                            */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div style={{ display: "grid", gridTemplateColumns: "2.2fr 1fr", gap: 0, ...thinRule }}>
              <div style={{ background: "#2a2a2a", padding: "clamp(20px,3.5vw,44px) 24px", display: "flex", alignItems: "center" }}>
                <h2 style={{ fontFamily: serif, fontSize: "clamp(52px,11vw,160px)", fontWeight: 800, color: "#d5d0c9", textTransform: "uppercase", letterSpacing: "-0.03em", lineHeight: 0.85, margin: 0 }}>WEBSITE</h2>
              </div>
              <div style={{ ...{ borderLeft: "1px solid #b5b0a8" }, padding: "16px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 60, height: 60, border: "1.5px solid #b5b0a8", borderRadius: 2, marginBottom: 8, overflow: "hidden" }}>
                  <img src="/faris.png" alt="Faris" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ fontFamily: serif, fontSize: 16, fontStyle: "italic", color: "#555", marginBottom: 6 }}>~ Faris ~</div>
                <div style={{ fontFamily: serif, fontSize: 9, color: "#888", letterSpacing: 1 }}>NAME: <span style={{ fontWeight: 800 }}>Mohammad Faris</span></div>
                <div style={{ fontFamily: serif, fontSize: 9, color: "#888", letterSpacing: 1, marginTop: 2 }}>UNIV: <span style={{ fontWeight: 800 }}>Padjadjaran</span></div>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════ */}
            {/*  3-COL EDITORIAL: UPCOMING / PROJECT / MANIFESTO      */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr 1.3fr", gap: 0, ...thinRule }}>
              {/* Upcoming */}
              <div style={{ ...colRule, padding: "20px 18px 20px 0" }}>
                <div style={{ ...sectionLabel, marginBottom: 6 }}>LATEST</div>
                <h3 style={{ fontFamily: serif, fontWeight: 800, fontSize: 17, textTransform: "uppercase", color: "#2a2a2a", margin: "0 0 10px", letterSpacing: "-0.01em" }}>UPCOMING NEXT</h3>
                <div style={{ width: 30, height: 2, background: "#2a2a2a", marginBottom: 10 }} />
                <p style={{ fontFamily: serif, fontSize: 13, color: "#444", lineHeight: 1.6, margin: "0 0 12px", textAlign: "justify" }}>Fresh entry — A selected work from the latest digital releases.</p>
                <p style={{ ...sectionLabel, margin: 0, fontSize: 8 }}>TIP! CLICK ON THE IMAGE TO EXPLORE</p>
              </div>
              {/* Timepad */}
              <div style={{ ...colRule, padding: "20px 18px" }}>
                <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=375&fit=crop" alt="Timepad App" style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", marginBottom: 10, display: "block", border: "1px solid #b5b0a8" }} />
                <div style={{ ...sectionLabel, marginBottom: 4 }}>FEATURED PROJECT</div>
                <h4 style={{ fontFamily: serif, fontWeight: 800, fontSize: 14, textTransform: "uppercase", color: "#2a2a2a", margin: "0 0 6px" }}>TIMEPAD</h4>
                <p style={{ fontFamily: serif, fontSize: 11, color: "#666", lineHeight: 1.6, margin: 0, textAlign: "justify" }}>Time management app implementing Realm for data storing and Chartview library for visualizing user productivity patterns.</p>
              </div>
              {/* Manifesto */}
              <div style={{ padding: "20px 0 20px 18px" }}>
                <h3 style={{ fontFamily: serif, fontWeight: 800, fontSize: "clamp(26px,4.5vw,48px)", textTransform: "uppercase", color: "#2a2a2a", lineHeight: 0.92, margin: "0 0 4px", letterSpacing: "-0.02em" }}>THINK, CREATE</h3>
                <h3 style={{ fontFamily: serif, fontWeight: 800, fontSize: "clamp(32px,5.5vw,60px)", textTransform: "uppercase", color: "#2a2a2a", lineHeight: 0.88, margin: "0 0 16px", letterSpacing: "-0.03em" }}>DELIVER</h3>

                <p style={{ fontFamily: serif, fontSize: 14, color: "#333", lineHeight: 1.65, margin: "0 0 12px", textAlign: "justify" }}>
                  <span style={{ float: "left", fontFamily: serif, fontSize: 44, fontWeight: 800, lineHeight: 0.75, marginRight: 5, marginTop: 5, color: "#2a2a2a" }}>A</span>
                  &nbsp;strong project is created by deep collaboration. I design, develop, and deliver applications that solve real problems — from iOS apps to full-stack web platforms.
                </p>
                <p style={{ fontFamily: serif, fontSize: 13, color: "#555", lineHeight: 1.6, margin: 0, fontStyle: "italic", textAlign: "justify" }}>Like an artisan, I start from raw code and give life to an iconic product, starting from Clean Architecture that guides the project to production.</p>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════ */}
            {/*  STATS ROW — newspaper awards style                   */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div style={{ ...thickThinRule, padding: "16px 0" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
                {[
                  { sub: "IOS PROJECTS", label: "BUILT", value: "4+" },
                  { sub: "TECH STACKS", label: "MASTERED", value: "8" },
                  { sub: "YEARS OF", label: "EXPERIENCE", value: "3+" },
                  { sub: "FRAMEWORKS", label: "USED", value: "12+" },
                ].map((item, i) => (
                  <div key={i} style={{ borderRight: i < 3 ? "1px solid #b5b0a8" : "none", padding: "4px 12px", display: "flex", alignItems: "baseline", justifyContent: "center", gap: 8 }}>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ ...sectionLabel, fontSize: 8, lineHeight: 1.3 }}>{item.sub}</div>
                      <div style={{ fontFamily: serif, fontWeight: 800, fontSize: "clamp(12px,2vw,18px)", textTransform: "uppercase", color: "#2a2a2a", lineHeight: 1 }}>{item.label}</div>
                    </div>
                    <div style={{ fontFamily: serif, fontWeight: 800, fontSize: "clamp(36px,6vw,64px)", color: "#2a2a2a", lineHeight: 0.85 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════ */}
            {/*  TOP PROJECTS — 3-col newspaper feature               */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div style={{ ...thinRule, padding: "20px 0 0" }}>
              <div style={{ ...sectionLabel, marginBottom: 12 }}>FEATURED WORKS</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, ...thinRule }}>
              {/* Cyclouse */}
              <div style={{ ...colRule, padding: "16px 18px 20px 0" }}>
                <img src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=3444&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cyclouse App" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", marginBottom: 10, border: "1px solid #b5b0a8" }} />
                <div style={{ fontFamily: serif, fontWeight: 800, fontSize: 14, textTransform: "uppercase", color: "#2a2a2a", marginBottom: 3 }}>
                  CYCLOUSE <span style={{ background: "#c0392b", color: "#fff", fontSize: 8, padding: "2px 5px", borderRadius: 1, marginLeft: 4, fontWeight: 800, letterSpacing: 0.5 }}>NEW</span>
                </div>
                <p style={{ fontFamily: serif, fontSize: 11, color: "#666", lineHeight: 1.55, margin: 0, textAlign: "justify" }}>A cycling e-commerce iOS app built with Swift, RxSwift reactive programming, MVVM architecture, and Core Data management.</p>
              </div>
              {/* Center headline */}
              <div style={{ ...colRule, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "16px 18px" }}>
                <h2 style={{ fontFamily: serif, fontWeight: 800, fontSize: "clamp(22px,3vw,36px)", textTransform: "uppercase", color: "#2a2a2a", lineHeight: 1, margin: "0 0 10px", letterSpacing: "-0.01em" }}>ALL WORK!</h2>
                <div style={{ width: 40, height: 1, background: "#b5b0a8", marginBottom: 10 }} />
                <p style={{ fontFamily: serif, fontSize: 14, fontStyle: "italic", color: "#555", lineHeight: 1.45, margin: "0 0 12px", maxWidth: 220 }}>A featured selection of the latest work — spanning the last years.</p>
                <p style={{ ...sectionLabel, margin: 0, fontSize: 8 }}>TIP: DRAG SIDEWAYS TO NAVIGATE</p>
              </div>
              {/* Siniar */}
              <div style={{ padding: "16px 0 20px 18px" }}>
                <img src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=450&fit=crop" alt="Siniar App" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", marginBottom: 10, border: "1px solid #b5b0a8" }} />
                <div style={{ fontFamily: serif, fontWeight: 800, fontSize: 14, textTransform: "uppercase", color: "#2a2a2a", marginBottom: 3 }}>
                  SINIAR <span style={{ background: "#c0392b", color: "#fff", fontSize: 8, padding: "2px 5px", borderRadius: 1, marginLeft: 4, fontWeight: 800, letterSpacing: 0.5 }}>APP</span>
                </div>
                <p style={{ fontFamily: serif, fontSize: 11, color: "#666", lineHeight: 1.55, margin: 0, textAlign: "justify" }}>Simple Podcast App using iTunes API and AVKit for developing the media player with a clean, intuitive interface.</p>
              </div>
            </div>

            <Ornament />

            {/* ═══════════════════════════════════════════════════════ */}
            {/*  EXPERIENCE — newspaper classifieds style              */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div style={{ ...thinRule, padding: "4px 0 0" }}>
              <div style={{ ...sectionLabel, marginBottom: 4 }}>CAREER · APPOINTMENTS</div>
              <div style={{ borderTop: "2px solid #2a2a2a", marginBottom: 0 }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, ...thinRule }}>
              {[
                { quote: "Developed iOS features using Firebase Auth, AVFoundation video player, and Alamofire for API consumption. Applied MVC design pattern and customized collection/table views.", name: "MOJADIAPP", role: "iOS Engineer Intern", date: "Feb – Jul 2022" },
                { quote: "Intensive iOS development training covering Swift fundamentals, Core Data, MVVM architecture, RxSwift reactive programming, and Alamofire. Built Cyclouse as final project.", name: "PHINCON ACADEMY", role: "iOS Bootcamp", date: "Jul – Sep 2024" },
                { quote: "Completed comprehensive iOS Developer Pathway covering Swift programming, app layout design, and data management fundamentals via structured online program.", name: "MYEDUSOLVE", role: "Apprenticeship", date: "Aug – Dec 2022" },
              ].map((t, i) => (
                <div key={i} style={{ borderRight: i < 2 ? "1px solid #b5b0a8" : "none", padding: "18px 16px 18px" + (i === 0 ? " 0" : i === 2 ? " 16px" : ""), paddingLeft: i === 0 ? 0 : 16 }}>
                  <div style={{ fontFamily: serif, fontWeight: 800, fontSize: 13, textTransform: "uppercase", color: "#2a2a2a", marginBottom: 2 }}>{t.name}</div>
                  <div style={{ fontFamily: serif, fontSize: 11, fontStyle: "italic", color: "#888", marginBottom: 8 }}>{t.role} · {t.date}</div>
                  <div style={{ width: 24, height: 1, background: "#b5b0a8", marginBottom: 8 }} />
                  <p style={{ fontFamily: serif, fontSize: 12, color: "#444", lineHeight: 1.6, margin: 0, textAlign: "justify" }}>{t.quote}</p>
                </div>
              ))}
            </div>

            {/* ═══════════════════════════════════════════════════════ */}
            {/*  SKILLS — classified ads / index style                 */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div style={{ padding: "4px 0 0" }}>
              <div style={{ ...sectionLabel, marginBottom: 4 }}>TECHNICAL INDEX</div>
              <div style={{ borderTop: "2px solid #2a2a2a", marginBottom: 0 }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, ...thickThinRule }}>
              {[
                { title: "MOBILE DEV.", items: "Swift · UIKit · SwiftUI · RxSwift · Core Data · Realm · AVPlayer · MVVM · Storyboard · Programmatic UI" },
                { title: "BACKEND", items: "Golang · Gin/Echo · GORM · Java · Spring Boot · JWT Auth · REST APIs · Clean Architecture · PostgreSQL" },
                { title: "FRONTEND", items: "React.js · Next.js · Angular · TypeScript · TanStack Query · TanStack Router · JavaScript · Tailwind CSS" },
                { title: "DATA & OPS", items: "Apache Airflow · Kafka CDC · Debezium · ETL Pipelines · Docker · Git · Firebase Auth · PostgreSQL Optimization" },
              ].map((cat, i) => (
                <div key={i} style={{ borderRight: i < 3 ? "1px solid #b5b0a8" : "none", padding: "14px 14px 16px", paddingLeft: i === 0 ? 0 : 14 }}>
                  <h4 style={{ fontFamily: serif, fontWeight: 800, fontSize: 11, textTransform: "uppercase", color: "#2a2a2a", margin: "0 0 6px", letterSpacing: 1 }}>{cat.title}</h4>
                  <div style={{ width: 20, height: 1, background: "#b5b0a8", marginBottom: 6 }} />
                  <p style={{ fontFamily: serif, fontSize: 10.5, color: "#666", lineHeight: 1.65, margin: 0 }}>{cat.items}</p>
                </div>
              ))}
            </div>

            {/* ═══════════════════════════════════════════════════════ */}
            {/*  BOTTOM PROJECTS — newspaper spread                   */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div style={{ padding: "4px 0 0" }}>
              <div style={{ ...sectionLabel, marginBottom: 10 }}>MORE FROM THE ARCHIVE</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 1fr", gap: 0, ...thinRule }}>
              <div style={{ ...colRule, padding: "0 18px 20px 0" }}>
                <img src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=3444&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cyclouse" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block", marginBottom: 10, border: "1px solid #b5b0a8" }} />
                <div style={{ fontFamily: serif, fontWeight: 800, fontSize: 13, textTransform: "uppercase", color: "#2a2a2a", marginBottom: 3 }}>
                  CYCLOUSE <span style={{ background: "#c0392b", color: "#fff", fontSize: 7, padding: "2px 5px", borderRadius: 1, marginLeft: 4, fontWeight: 800 }}>NEW</span>
                </div>
                <p style={{ fontFamily: serif, fontSize: 11, color: "#666", lineHeight: 1.55, margin: 0, textAlign: "justify" }}>Cycling e-commerce iOS app with Swift, RxSwift, MVVM, Core Data, and Alamofire.</p>
              </div>
              <div style={{ ...colRule, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "10px 18px" }}>
                <h3 style={{ fontFamily: serif, fontWeight: 800, fontSize: "clamp(22px,3vw,34px)", textTransform: "uppercase", color: "#2a2a2a", lineHeight: 1, margin: "0 0 8px" }}>ALL WORK!</h3>
                <div style={{ width: 30, height: 1, background: "#b5b0a8", marginBottom: 8 }} />
                <p style={{ fontFamily: serif, fontSize: 14, fontStyle: "italic", color: "#444", lineHeight: 1.45, margin: "0 0 10px", maxWidth: 240 }}>Handpicked highlights — spanning the last few years.</p>
                <p style={{ ...sectionLabel, margin: 0, fontSize: 8 }}>TIP! CLICK ON THE SIDES TO EXPLORE</p>
              </div>
              <div style={{ padding: "0 0 20px 18px" }}>
                <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=338&fit=crop" alt="Timepad" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block", marginBottom: 10, border: "1px solid #b5b0a8" }} />
                <div style={{ fontFamily: serif, fontWeight: 800, fontSize: 13, textTransform: "uppercase", color: "#2a2a2a", marginBottom: 3 }}>
                  TIMEPAD <span style={{ background: "#c0392b", color: "#fff", fontSize: 7, padding: "2px 5px", borderRadius: 1, marginLeft: 4, fontWeight: 800 }}>APP</span>
                </div>
                <p style={{ fontFamily: serif, fontSize: 11, color: "#666", lineHeight: 1.55, margin: 0, textAlign: "justify" }}>Time management app with Realm for data storing and Chartview library.</p>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════ */}
            {/*  MARQUEE — scrolling ticker                           */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div style={{ background: "#2a2a2a", overflow: "hidden", padding: "18px 0", margin: "0 -28px" }}>
              <div style={{ display: "flex", gap: 48, whiteSpace: "nowrap", animation: "marqueeScroll 16s linear infinite" }}>
                {[...Array(6)].map((_, i) => (
                  <span key={i} style={{ fontFamily: serif, fontWeight: 800, fontSize: "clamp(24px,4.5vw,48px)", color: "#d5d0c9", display: "flex", alignItems: "center", gap: 20, flexShrink: 0 }}>
                    Let&apos;s create something together
                    <span style={{ background: "#d5d0c9", color: "#2a2a2a", fontSize: "clamp(10px,1.5vw,16px)", padding: "8px 20px", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>EMAIL ME</span>
                    <span style={{ color: "#666", fontSize: 14 }}>★</span>
                  </span>
                ))}
              </div>
              <style>{`@keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
            </div>

            {/* ═══════════════════════════════════════════════════════ */}
            {/*  FOOTER — newspaper colophon                          */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0 16px" }}>
              <div style={{ fontFamily: serif, fontWeight: 800, fontSize: 11, textTransform: "uppercase", color: "#2a2a2a", display: "flex", alignItems: "center", gap: 8, letterSpacing: 0.5 }}>
                FARIS &copy; 2026
                <img src="/faris.png" alt="" style={{ width: 14, height: 14, borderRadius: "50%", objectFit: "cover" }} />
                <span style={{ fontWeight: 400, fontStyle: "italic", color: "#888", fontSize: 10, textDecoration: "underline", cursor: "pointer", textTransform: "none" }}>Legal</span>
              </div>
              <div style={{ display: "flex", gap: 14, fontFamily: serif, fontSize: 10, color: "#555", letterSpacing: 1.5, textTransform: "uppercase" }}>
                <a href="https://www.linkedin.com/in/farisarie/" style={{ color: "#555", textDecoration: "none" }}>LINKEDIN</a>
                <span style={{ color: "#b5b0a8" }}>·</span>
                <a href="https://github.com/farisarie" style={{ color: "#555", textDecoration: "none" }}>GITHUB</a>
                <span style={{ color: "#b5b0a8" }}>·</span>
                <a href="mailto:farisariep@gmail.com" style={{ color: "#555", textDecoration: "none" }}>EMAIL</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}