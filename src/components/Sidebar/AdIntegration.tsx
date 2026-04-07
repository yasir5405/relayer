import { Link } from "react-router-dom";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import FacebookLogo from "../FacebookLogo";
import GoogleLogo from "../GoogleLogo";
import MicrosoftLogo from "../MicrosoftLogo";

const AdIntegration = () => {
  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link to={"/"} className="justify-between text-xs">
              <span>Ad Integrations</span>

              <div className="bg-sidebar-accent text-sidebar-primary-foreground py-1 px-2 flex items-center justify-center h-fit w-fit rounded-lg size-8 gap-1">
                <GoogleLogo />
                <FacebookLogo />
                <MicrosoftLogo />
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default AdIntegration;
