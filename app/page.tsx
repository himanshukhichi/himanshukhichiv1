import Image from "next/image";
import { ArrowRight, ArrowUpRight, Download, Link as LinkIcon } from "lucide-react";
import {
  FaCodepen,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { profile } from "@/lib/profile";
import { Spotlight } from "@/components/spotlight";
import { SectionHeading } from "@/components/section-heading";
import { NavLinks } from "@/components/nav-links";
import { ProjectList } from "@/components/project-list";

const socials = [
  { label: "GitHub", href: profile.social.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.social.linkedin, icon: FaLinkedin },
  { label: "LeetCode", href: profile.social.leetcode, icon: SiLeetcode },
  { label: "CodePen", href: profile.social.codepen, icon: FaCodepen },
  { label: "Instagram", href: profile.social.instagram, icon: FaInstagram },
  { label: "Stack Overflow", href: profile.social.stackoverflow, icon: FaStackOverflow }
].filter((item) => item.href);

export default function Home() {
  return (
    <div className="group/spotlight relative">
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-yellow-500 px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-900 focus-visible:translate-x-0 focus-visible:text-slate-900"
        >
          Skip to Content
        </a>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <a href="/" aria-label="Home" className="mb-10 inline-flex lg:hidden">
                <Image
                  src="/assets/hk-monogram.png"
                  alt=""
                  width={44}
                  height={44}
                  className="rounded-full border border-slate-700/80"
                  priority
                />
              </a>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">{profile.name}</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                {profile.role}
              </h2>
              <p className="mt-4 max-w-xs leading-normal">{profile.tagline}</p>

              <NavLinks />
            </div>

            <ul className="ml-1 mt-8 flex flex-wrap items-center gap-x-5 gap-y-4" aria-label="Social links">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label} className="shrink-0 text-xs">
                  <a
                    className="block text-slate-400 hover:-translate-y-1 hover:text-slate-200 focus-visible:text-slate-200"
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${label} (opens in a new tab)`}
                    title={label}
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </header>

          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
              <SectionHeading>About</SectionHeading>
              <div>
                {profile.about.map((paragraph) => (
                  <p className="mb-4" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <SectionHeading>Experience</SectionHeading>
              <ol className="group/list">
                {profile.experience.map((job) => (
                  <li className="mb-12" key={`${job.company}-${job.period}`}>
                    <article className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-card-ring lg:group-hover:drop-shadow-lg" />
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                        aria-label={job.period}
                      >
                        {job.period}
                        <span className="mt-1 block normal-case tracking-normal text-slate-600">
                          {job.location}
                        </span>
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <a
                            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                            href={job.companyUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${job.role} at ${job.company} (opens in a new tab)`}
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            <span>
                              {job.role} ·{" "}
                              <span className="inline-block">
                                {job.company}
                                <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1" />
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">{job.summary}</p>
                        <ul className="mt-4 space-y-3 text-sm leading-normal text-slate-400">
                          {job.details.map((detail) => (
                            <li className="relative pl-5" key={detail}>
                              <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-teal-300" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {job.technologies.map((tech) => (
                            <li className="mr-1.5 mt-2" key={tech}>
                              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {tech}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </li>
                ))}
              </ol>
              <div className="mt-12">
                <a
                  className="group inline-flex items-center text-base font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="/assets/himanshu-khichi-resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <span className="pb-px transition">View Full Resume</span>
                    <Download className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-y-1 group-focus-visible:translate-y-1" />
                  </span>
                </a>
              </div>
            </section>

            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected projects"
            >
              <SectionHeading>Projects</SectionHeading>
              <ProjectList />
              <div className="mt-12">
                <a
                  className="group inline-flex items-center text-base font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="/archive"
                >
                  <span>
                    <span className="pb-px transition">View Full Project Archive</span>
                    <ArrowRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2" />
                  </span>
                </a>
              </div>
            </section>

            <section
              id="skills"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Skills"
            >
              <SectionHeading>Skills</SectionHeading>
              <div className="grid gap-4 sm:grid-cols-2">
                {profile.skills.map((group) => (
                  <article
                    className="rounded-md border border-slate-800 bg-slate-800/20 p-5 transition hover:border-slate-700 hover:bg-slate-800/40"
                    key={group.title}
                  >
                    <h3 className="font-medium text-slate-200">{group.title}</h3>
                    <ul className="mt-3 flex flex-wrap gap-2" aria-label={group.title}>
                      {group.items.map((item) => (
                        <li key={item}>
                          <span className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="education"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Education"
            >
              <SectionHeading>Education</SectionHeading>
              <ol className="group/list">
                {profile.education.map((education) => (
                  <li className="mb-12" key={education.school}>
                    <article className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-card-ring lg:group-hover:drop-shadow-lg" />
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        {education.period}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <a
                            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                            href={education.schoolUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${education.school} (opens in a new tab)`}
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            <span>
                              {education.school}
                              <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1" />
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm font-medium leading-normal text-slate-300">
                          {education.degree}
                        </p>
                        <ul className="mt-3 space-y-2 text-sm leading-normal">
                          {education.details.map((detail) => (
                            <li className="relative pl-5" key={detail}>
                              <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-teal-300" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </li>
                ))}
              </ol>
            </section>

            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Designed as a clean-room rebuild of the v5 portfolio layout in Next.js and Tailwind CSS. Content comes from Himanshu Khichi&apos;s portfolio data and resume. Built for quick edits, fast deployment, and a calm dark-mode reading experience.
              </p>
              <p className="mt-4 inline-flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                <a className="font-medium text-slate-400 hover:text-teal-300" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
