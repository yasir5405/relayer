import {
  IconChartLine,
  IconFileAnalytics,
  type TablerIcon,
} from "@tabler/icons-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";

const SidebarCampaigns = () => {
  const campaignSidebarList: {
    title: string;
    url: string;
    icon?: TablerIcon;
    isActive?: boolean;
  }[] = [
    {
      title: "Performance",
      url: "/performance",
      icon: IconChartLine,
      isActive: true,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: IconFileAnalytics,
    },
  ];

  const { pathname } = useLocation();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Analytics</SidebarGroupLabel>

      <SidebarMenu>
        {campaignSidebarList.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild isActive={pathname === item.url}>
              <NavLink to={item.url} className="text-xs">
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default SidebarCampaigns;
