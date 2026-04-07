import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "../ui/sidebar";
import AccountSwitcher from "./AccountSwitcher";
import DashboardOverview from "./DashboardOverview";
import SidebarAnalytics from "./SidebarAnalytics";
import SidebarCampaigns from "./SidebarCampaigns";
import SidebarSettings from "./SidebarSettings";
import SidebarUser from "./SidebarUser";

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AccountSwitcher />
      </SidebarHeader>

      <SidebarContent>
        <DashboardOverview />

        <SidebarAnalytics />

        <SidebarCampaigns />

        <SidebarSettings className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <SidebarUser />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
