import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";

type Section = {
  title: string;
  items: {
    name: string;
    description: string;
    href: string;
  }[];
};

type Props = {
  sections: Section[];
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
};

const MenuSections = ({ sections, hoveredIndex, setHoveredIndex }: Props) => {
  return (
    <div className="flex-1 grid grid-cols-3 gap-13">
      {sections.map((section, idx) => (
        <div key={section.title} className="flex flex-col gap-3">
          {/* TITLE */}
          <h3
            className="text-sm w-fit text-[#061B31] dark:text-muted-foreground"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {section.title}
          </h3>

          {/* LINE */}
          <div className="relative h-[1.25px] w-full bg-border overflow-hidden">
            <motion.div
              className="absolute top-0 h-full bg-linear-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] shadow-[0_0_8px_rgba(255,200,0,0.5)]"
              initial={{ x: "-100%", width: "100%" }}
              animate={hoveredIndex === idx ? { x: "0%" } : { x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>

          {/* ITEMS */}
          <ul className="flex flex-col gap-3">
            {section.items.map((item) => (
              <Link to={item.href} key={item.name} className="group">
                <p className="text-sm flex items-center gap-1 text-primary font-medium group-hover:text-hover transition">
                  {item.name}

                  <IconArrowRight className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 size-3.5" />
                </p>

                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuSections;
