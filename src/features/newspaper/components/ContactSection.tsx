import type { FC } from "react";
import { useAtom } from "jotai";
import { contactFormAtom, contactSubmittedAtom } from "../store";
import { rule, colR, lbl, just } from "../styles/classNames";
import { SOCIAL_LINKS } from "../data";

const inputClass =
  "w-full bg-transparent border border-[#b5b0a8] px-3 py-2 text-sm text-[#333] placeholder-[#aaa] outline-none focus:border-[#2a2a2a] transition-colors";

const ContactSection: FC = () => {
  const [form, setForm] = useAtom(contactFormAtom);
  const [submitted, setSubmitted] = useAtom(contactSubmittedAtom);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production → send to API / Contentful / email service
    console.log("Contact form submitted:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section aria-labelledby="contact-heading">
      <div className={`${rule} pt-1`}>
        <div className={`${lbl} mb-1`}>GET IN TOUCH</div>
        <div className="border-t-2 border-[#2a2a2a]" />
      </div>

      <div className={`${rule} grid grid-cols-[1fr_1.2fr]`}>
        {/* Left — info */}
        <div className={`${colR} pr-6 py-5`}>
          <h2
            id="contact-heading"
            className="font-extrabold text-[clamp(28px,4.5vw,48px)] uppercase text-[#2a2a2a] leading-[0.9] mb-1 -tracking-[0.02em]"
          >
            LET&apos;S
          </h2>
          <h2 className="font-extrabold text-[clamp(34px,5.5vw,60px)] uppercase text-[#2a2a2a] leading-[0.88] mb-4 -tracking-[0.03em]">
            TALK
          </h2>
          <div className="w-10 h-[3px] bg-[#2a2a2a] mb-5" />

          <p className={`${just} text-sm text-[#444] leading-[1.65] mb-5`}>
            Available for freelance projects, full-time opportunities, and
            creative collaborations. Whether you need an iOS app, a modern web
            platform, or a backend API — let&apos;s build something great
            together.
          </p>

          <div className="space-y-2">
            {[
              { label: "EMAIL", href: SOCIAL_LINKS.email, text: "farisariep@gmail.com" },
              { label: "LINKEDIN", href: SOCIAL_LINKS.linkedin, text: "linkedin.com/in/farisarie" },
              { label: "GITHUB", href: SOCIAL_LINKS.github, text: "github.com/farisarie" },
            ].map((link) => (
              <div key={link.label} className="flex items-baseline gap-3">
                <span className={`${lbl} !text-[8px] w-16 shrink-0`}>{link.label}</span>
                <a
                  href={link.href}
                  className="text-[12px] text-[#2a2a2a] underline hover:text-[#666] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="pl-6 py-5">
          <div className={`${lbl} mb-3`}>SEND A MESSAGE</div>

          {submitted ? (
            <div className="border-2 border-dashed border-[#4a7a5a] p-6 text-center">
              <p className="font-extrabold text-[#4a7a5a] text-lg uppercase mb-2">
                MESSAGE SENT!
              </p>
              <p className="text-sm text-[#666] italic">
                Thank you for reaching out. I&apos;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div>
                <label htmlFor="contact-name" className={`${lbl} !text-[8px] block mb-1`}>
                  YOUR NAME
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={inputClass}
                  required
                  autoComplete="name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className={`${lbl} !text-[8px] block mb-1`}>
                  YOUR EMAIL
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={inputClass}
                  required
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className={`${lbl} !text-[8px] block mb-1`}>
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                  className={`${inputClass} resize-none`}
                  required
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-[#2a2a2a] text-[#d5d0c9] py-3 font-extrabold text-sm uppercase tracking-[2px] hover:bg-[#444] transition-colors cursor-pointer"
              >
                SEND MESSAGE
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
