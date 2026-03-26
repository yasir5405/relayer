import { Link } from "react-router-dom";
import Logo from "../Logo";
import {} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { IconMenuDeep, IconX } from "@tabler/icons-react";

import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import NavbarLinks from "./NavbarLinks";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 border-b shadow-2xs flex items-center justify-between px-3 md:px-34 z-20 bg-background">
      {open && (
        <div className="w-full fixed top-16 inset-0 z-50">
          <div
            className="fixed inset-0 top-16 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          ></div>
        </div>
      )}

      <Link
        to={"/"}
        className="-ml-1 flex h-full w-fit items-center justify-center gap-1"
      >
        <Logo size="sm" />

        <h1 className="font-heading text-2xl font-semibold">Relayer</h1>
      </Link>

      <NavbarLinks />

      <div className="h-full w-fit flex items-center justify-center gap-3 md:gap-2">
        <Button
          variant={"ghost"}
          className="hidden md:flex text-muted-foreground"
        >
          Log in
        </Button>

        <InteractiveHoverButton className="font-heading hidden md:flex">
          Get Started
        </InteractiveHoverButton>

        {open ? (
          <IconX onClick={() => setOpen(false)} />
        ) : (
          <IconMenuDeep
            size={24}
            className="block md:hidden lg:hidden xl:hidden"
            onClick={() => setOpen(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
