import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AccordCard } from "../../atoms/AccordCard";

gsap.registerPlugin(ScrollTrigger);

export const Accordion = ({ exps = [] }) => {
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const items = list.querySelectorAll(".accord-item");

    const ctx = gsap.context(() => {
      gsap.set(items, { opacity: 0, y: 50 });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: list,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, list);

    return () => ctx.revert();
  }, [exps]);

  return (
    <ul
      ref={listRef}
      className="w-full h-full rounded-2xl flex flex-col gap-3 py-4 px-4 md:px-6
          overflow-y-auto
          [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-[#577BC1]
          [&::-webkit-scrollbar-thumb]:rounded-full"
    >
      {exps.map((exp, idx) => (
        <li key={idx} className="shrink-0 accord-item" style={{ opacity: 0 }}>
          <AccordCard data={exp} />
        </li>
      ))}
    </ul>
  );
};
