"use client";

import { useEffect } from "react";

export default function StickyWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const primaryHeader = document.querySelector(".primary-header")!;
    const scrollWatcher = document.createElement("div");

    scrollWatcher.setAttribute("data-scroll-watcher", "");
    primaryHeader.before(scrollWatcher);

    const navObserver = new IntersectionObserver(
      (entries) => {
        primaryHeader.classList.toggle("shadow", !entries[0].isIntersecting);
      },
      { rootMargin: "0px 0px 0px 0px" }
    );

    navObserver.observe(scrollWatcher);
  }, []);

  return (
    <div className="primary-header sticky p-8 top-0 z-50 w-full bg-background/60 backdrop-blur border-b">
      {children}
    </div>
  );
}
