"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";
import avatar from "@/public/avatar.png";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  navItems: Array<{ href: string; label: string }>;
}

export default function Header({ navItems }: HeaderProps) {
  const [firstName, ...surname] = profile.name.split(" ");

  return (
    <aside className="bp-rail">
      <div className="bp-rail-inner">
        <div className="bp-rail-code">
          <span className="bp-mono">JT / 001</span>
          <span className="bp-mono bp-accent-text">2026</span>
        </div>

        <div className="bp-rail-profile">
          <Image
            src={avatar}
            alt={`Retrato de ${profile.name}`}
            width={96}
            height={96}
            priority
            className="bp-avatar"
          />
          <div>
            <h2 className="bp-rail-name">
              {firstName}
              <br />
              {surname.join(" ")}
            </h2>
            <p className="bp-rail-role bp-mono">
              BACKEND DEVELOPER
              <br />& GOLANG SPECIALIST
            </p>
          </div>
        </div>

        <div className="bp-rail-index">
          <p className="bp-label bp-rail-label">Index</p>
          <nav aria-label="Navegação principal" className="bp-rail-nav">
            {(() => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [activeId, setActiveId] = useState("about");

              // eslint-disable-next-line react-hooks/rules-of-hooks
              useEffect(() => {
                const handleScroll = () => {
                  const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

                  if (isBottom) {
                    setActiveId("contato");
                    return;
                  }

                  const scrollPosition = window.scrollY + 200;

                  const sections = navItems.map((item) => {
                    const id = item.href.replace("#", "");
                    const element = document.getElementById(id);
                    return {
                      id,
                      offsetTop: element ? element.offsetTop : 0,
                      offsetBottom: element ? element.offsetTop + element.offsetHeight : 0,
                    };
                  });

                  const currentSection = sections.find(
                    (section) =>
                      scrollPosition >= section.offsetTop && scrollPosition < section.offsetBottom
                  );

                  if (currentSection) {
                    setActiveId(currentSection.id);
                  }
                };

                window.addEventListener("scroll", handleScroll);
                handleScroll();
                return () => window.removeEventListener("scroll", handleScroll);
              }, []);

              return navItems.map((item, index) => {
                const isCurrent = activeId === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`bp-nav-item bp-focus ${isCurrent ? "is-active" : ""}`}
                    aria-current={isCurrent ? "page" : undefined}
                  >
                    {String(index + 1).padStart(2, "0")} — {item.label}
                  </a>
                );
              });
            })()}
          </nav>
        </div>

        <div className="bp-rail-footer">
          <div className="bp-availability">
            <p className="bp-label bp-rail-label">Availability</p>
            <p className="bp-rail-value">Brasil · Remoto</p>
            <a href={`mailto:${profile.email}`} className="bp-rail-email bp-focus">
              {profile.email}
            </a>
          </div>
          <ThemeToggle />
          <a href={profile.resumeUrl} className="bp-cv-link bp-focus" target="_blank">
            Abrir currículo <span className="bp-accent-text">↗</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
