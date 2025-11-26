"use client";
import { blogData } from "@/modules/blog/page";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ApLoader } from "@/components/loader";
import { div } from "framer-motion/client";

export default function Home() {
  const [activeSection, setActiveSection] = useState("experience");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sections = document.querySelectorAll("main section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const sectionsData = [
    { id: "about", title: "About" },
    { id: "experience", title: "Experience" },
    { id: "blog", title: "Blog" },
  ];

  if (loading)
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <ApLoader />
      </div>
    );
  return (
    <div className="flex flex-col lg:gap-28 lg:flex-row max-w-7xl mx-auto px-6 pb-12 lg:px-24 scroll-smooth">
      <motion.header
        className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:h-screen"
        initial={{ x: -50, opacity: 0 }} // start slightly to the right and invisible
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="lg:mt-20">
          <>
            <h1 className="text-2xl lg:text-4xl font-bold text-white pt-12">
              Emmanuel Fawehinmi
            </h1>
            <p className="my-3 text-xl text-zinc-400">Software Engineer</p>
          </>

          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-lg text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-globe w-4 h-4 text-primary"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
              <span className="text-zinc-300 text-sm">Web</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-lg text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-server w-4 h-4 text-primary"
                aria-hidden="true"
              >
                <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                <line x1="6" x2="6.01" y1="6" y2="6"></line>
                <line x1="6" x2="6.01" y1="18" y2="18"></line>
              </svg>
              <span className="text-zinc-300 text-sm">Backend</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <a
            href="/Emmanuel_Fawehinmi_Resume.pdf"
            download="Emmanuel_Fawehinmi_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/40 text-white/80 font-medium rounded-lg transition-colors text-xs hover:text-white hover:border-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-download w-4 h-4"
              aria-hidden="true"
            >
              <path d="M12 15V3"></path>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <path d="m7 10 5 5 5-5"></path>
            </svg>
            Download CV
          </a>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/emmanuel-fawehinmi-6ab27521b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin w-5 h-5"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="mailto:emmanuelfawehinmi12@gmail.com"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail w-5 h-5"
              aria-hidden="true"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg>
          </a>
        </div>
        <nav className="mt-12" aria-label="Section navigation">
          <ul>
            {sectionsData.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`group flex items-center py-3 hover:text-primary ${
                    activeSection === section.id
                      ? "font-bold text-primary"
                      : "text-slate-500"
                  }`}
                >
                  <span
                    className={`nav-indicator mr-4 h-px w-8 transition-all group-hover:bg-primary ${
                      activeSection === section.id
                        ? "w-16 bg-primary"
                        : "group-hover:w-16 bg-slate-600"
                    }`}
                  ></span>
                  <span className="text-xs uppercase tracking-widest">
                    {section.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.header>

      <main className="flex-1 lg:sticky lg:top-0 ">
        <div className="pointer-events-none sticky top-0 z-20 -ml-6 -mr-6 h-24 bg-linear-to-b from-zinc-950 to-transparent lg:-ml-12 lg:-mr-24"></div>
        <motion.section
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          id="about"
          className="pt-8"
        >
          <motion.p className="text-zinc-400 max-w-xl text-justify">
            I am a highly motivated software engineer with 4+ years of
            experience building modern, user-focused web and mobile
            applications. I specialize in creating efficient, scalable solutions
            and enjoy turning ideas into polished, real-world products.
            Passionate about clean code, great user experience, and continuous
            learning, I bring strong problem-solving skills and a commitment to
            delivering high-quality results on every project.
          </motion.p>
        </motion.section>

        <section id="experience" className="pt-12">
          <motion.h3
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-sm font-bold text-zinc-200 uppercase tracking-widest mb-2"
          >
            Experience
          </motion.h3>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group grid md:grid-cols-[120px_1fr] gap-4"
          >
            <div className="text-sm text-white/60 font-mono pt-1 md:sticky md:top-24 md:self-start">
              October 2025 – November 2025
            </div>
            <div className="flex-1 group">
              <h4 className="text-zinc-100 font-medium text-lg mb-1 group-hover:text-primary transition-colors">
                Backend Engineer · Finosell
              </h4>
              <ul className="text-white/70 leading-relaxed mb-4 space-y-3 text-sm">
                <li>
                  <strong className="font-semibold text-white/80">
                    Payment Processing &amp; Webhooks
                  </strong>
                  : Integrated virtual account and payment-processing APIs with
                  secure authentication and idempotency handling. Built
                  automated workflows for account creation, fund transfers, and
                  identity verification, while implementing webhook listeners to
                  process real-time payment events and update transaction states
                  reliably.
                </li>
                <li>
                  <strong className="font-semibold text-white/80">
                    Budget Management &amp; Approval
                  </strong>
                  : Designed and implemented a budget management system with
                  multi-level approval workflows. Automated tracking of budget
                  requests, approvals, and allocations while enforcing
                  role-based access controls.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-zinc-500 rounded-full bg-zinc-900 px-2 py-1 border border-zinc-800 hover:border-primary hover:text-primary">
                  Node JS
                </span>
                <span className="text-xs text-zinc-500 rounded-full bg-zinc-900 px-2 py-1 border border-zinc-800 hover:border-primary hover:text-primary">
                  Typescript
                </span>
                <span className="text-xs text-zinc-500 rounded-full bg-zinc-900 px-2 py-1 border border-zinc-800 hover:border-primary hover:text-primary">
                  Mongo DB
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group grid md:grid-cols-[120px_1fr] gap-4 mt-12"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-sm text-white/60 font-mono pt-1 md:sticky md:top-24 md:self-start"
            >
              June 2025 – November 2025
            </motion.div>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex-1 group"
            >
              <h4 className="text-zinc-100 font-medium text-lg mb-1 group-hover:text-primary transition-colors">
                Product Manager / Designer · Union Bank of Nigeria
              </h4>
              <ul className="text-white/70 leading-relaxed mb-4 space-y-3 text-sm">
                <li>
                  <strong className="font-semibold text-white/80">
                    Agent Wallet Redesign
                  </strong>
                  : Redesigned the agent wallet interface into a modern,
                  intuitive experience, revamping onboarding flows, transaction
                  pages, and withdrawal screens to improve usability, clarity,
                  and overall user engagement.
                </li>
                <li>
                  <strong className="font-semibold text-white/80">
                    Product Research
                  </strong>
                  : Researched and evaluated potential new features for Union
                  Bank’s Omni-Channel mobile app, translating insights into
                  structured presentations for the product team.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-zinc-500 rounded-full bg-zinc-900 px-2 py-1  border border-zinc-800 hover:border-primary hover:text-primary">
                  Figma
                </span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group grid md:grid-cols-[120px_1fr] gap-4 mt-12"
          >
            <div className="text-sm text-white/60 font-mono pt-1 md:sticky md:top-24 md:self-start">
              May 2022 – June 2025
            </div>
            <div className="flex-1 group">
              <h4 className="text-zinc-100 font-medium text-lg mb-1 group-hover:text-primary transition-colors">
                Fullstack Engineer · Async Technologies
              </h4>
              <ul className="text-white/70 leading-relaxed mb-4 space-y-3 text-sm">
                <li>
                  <strong className="font-semibold text-white/80">
                    Admin Dashboard Platform
                  </strong>
                  : Built REST and GraphQL APIs implementing role-based access
                  control (RBAC) to manage branches, staff, products, stock,
                  orders, and product categories, enabling efficient and secure
                  administration workflows <br />
                  Implemented and integrated created APIs on the frontend using
                  Next.js, enabling seamless admin dashboard operations for
                  products, orders, and user management.
                </li>
                <li>
                  <strong className="font-semibold text-white/80">
                    Ecommerce Platform
                  </strong>
                  : Implemented product listing, user cart selection and
                  management, as well as order tracking.
                </li>
                <li>
                  <strong className="font-semibold text-white/80">
                    Trained new staffs
                  </strong>
                  : Trained and guided 3 new front-end staff, providing hands-on
                  mentorship, code reviews, and best practices.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-zinc-500 rounded-full bg-zinc-900 px-2 py-1  border border-zinc-800 hover:border-primary hover:text-primary">
                  Next JS
                </span>
                <span className="text-xs text-zinc-500 rounded-full bg-zinc-900 px-2 py-1  border border-zinc-800 hover:border-primary hover:text-primary">
                  Tailwind CSS
                </span>
                <span className="text-xs text-zinc-500 rounded-full bg-zinc-900 px-2 py-1  border border-zinc-800 hover:border-primary hover:text-primary">
                  React Native
                </span>
                <span className="text-xs text-zinc-500 rounded-full bg-zinc-900 px-2 py-1  border border-zinc-800 hover:border-primary hover:text-primary">
                  Nest JS
                </span>
                <span className="text-xs text-zinc-500 rounded-full bg-zinc-900 px-2 py-1  border border-zinc-800 hover:border-primary hover:text-primary">
                  MongoDB
                </span>
                <span className="text-xs text-zinc-500 rounded-full bg-zinc-900 px-2 py-1  border border-zinc-800 hover:border-primary hover:text-primary">
                  GraphQl
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          id="blog"
          className="pt-20"
        >
          <ul className="group/list mb-2">
            {Object.keys(blogData).map((key) => (
              <li className="mb-12" key={key}>
                <div className="group relative grid md:grid-cols-[120px_1fr] gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <Image
                    src={blogData[key as keyof typeof blogData].image}
                    height={100}
                    width={100}
                    alt="race-condition"
                    className="z-10"
                  />
                  <div className="z-10 text-zinc-500">
                    <p className="-mt-1 text-sm font-semibold leading-6">
                      {blogData[key as keyof typeof blogData].date}
                    </p>
                    <h3 className="-mt-1">
                      <Link
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-primary focus-visible:text-primary  group/link text-base"
                        href={blogData[key as keyof typeof blogData].link}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="5 Common Accessibility Pitfalls and How to Avoid Them (opens in a new tab)"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {blogData[key as keyof typeof blogData].title}
                          <span className="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </Link>
                    </h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </motion.section>
      </main>
    </div>
  );
}
