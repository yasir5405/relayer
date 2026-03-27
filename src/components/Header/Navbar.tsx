import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import {} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { IconMenuDeep, IconX } from "@tabler/icons-react";

import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import NavbarLinks from "./NavbarLinks";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  companySections,
  productSections,
  resourcesSections,
  toolsSections,
} from "@/constants/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MobileProductsAccordion = ({
  section,
}: {
  section: {
    title: string;
    items: {
      name: string;
      description: string;
      href: string;
    }[];
  }[];
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col gap-4 font-heading">
      <h1 className="text-muted-foreground text-sm">Product</h1>

      <Accordion type="single" collapsible className="w-full">
        {section.map((group, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-none"
          >
            {/* Trigger */}
            <AccordionTrigger className="text-2xl font-medium py-2 hover:no-underline flex items-center">
              {group.title}
            </AccordionTrigger>

            {/* Content */}
            <AccordionContent className="flex flex-col gap-0">
              {group.items.map((item) => (
                <h1
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  className="text-base text-neutral-300 transition-colors px-2 py-2 rounded-md hover:bg-white/5 no-underline"
                >
                  {item.name}
                </h1>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const MobileNavSections = ({
  section,
  title,
}: {
  section: {
    title: string;
    items: {
      name: string;
      description: string;
      href: string;
    }[];
  }[];
  title: string;
}) => {
  return (
    <div className="flex w-full flex-col gap-4 font-heading">
      <h1 className="text-muted-foreground text-sm">{title}</h1>

      <div className="w-full flex flex-col gap-2.5">
        {section.map((section) => (
          <h1 className="font-medium text-2xl">{section.title}</h1>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="-ml-0.5 fixed top-0 left-0 w-full h-16 border-b shadow-2xs flex items-center justify-between px-5 md:px-34 z-20 bg-background">
      {open && (
        <div className="w-full fixed top-16 inset-0 py-8 z-50 bg-black/80 backdrop-blur-lg px-5 flex md:hidden flex-col gap-10 overflow-y-auto">
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <Button
              size={"lg"}
              className="w-full text-base py-2 px-8 dark:text-white hover:bg-hover transition-all duration-200 ease-in-out"
            >
              Get Started
            </Button>
            <InteractiveHoverButton
              className="font-heading w-full rounded-lg"
              onClick={() => navigate("/login")}
            >
              Login
            </InteractiveHoverButton>
          </div>
          <MobileProductsAccordion section={productSections} />
          <MobileNavSections section={toolsSections} title="Tools" />
          <MobileNavSections section={companySections} title="Company" />
          <MobileNavSections section={resourcesSections} title="Resources" />

          <h1 className="font-medium text-2xl">Report an issue</h1>
        </div>
      )}

      <Link
        to={"/"}
        className="flex h-full w-fit items-center justify-center gap-1"
      >
        <Logo size="sm" />

        <h1 className="font-heading text-2xl font-semibold">Relayer</h1>
      </Link>

      <NavbarLinks />

      <div className="h-full w-fit flex items-center justify-center gap-3 md:gap-2">
        <Button
          variant={"ghost"}
          className="hidden md:flex text-muted-foreground"
          asChild
        >
          <Link to={"/login"}>Log in</Link>
        </Button>

        <InteractiveHoverButton className="font-heading hidden md:flex">
          Get Started
        </InteractiveHoverButton>

        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="block md:hidden"
            >
              <IconX onClick={() => setOpen(false)} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="block md:hidden"
            >
              <IconMenuDeep onClick={() => setOpen(true)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
