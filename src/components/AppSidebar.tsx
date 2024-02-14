import {
  ArchiveIcon,
  DashboardIcon,
  DoubleArrowLeftIcon,
  GearIcon,
  LayersIcon,
  PersonIcon,
  ValueIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const AppSidebar = () => {
  const [toggled, setToggled] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        backgroundColor="#ffffff"
        onBackdropClick={() => setToggled(false)}
        collapsed={collapsed}
        width="280px"
      >
        <Menu
          rootStyles={{
            [`.ps-menu-button`]: { margin: "12px", borderRadius: "8px" },
            [`.ps-menu-icon`]: {
              color: "#333",
              height: "30px",
              width: "30px",
            },
            [`.ps-submenu-expand-icon`]: {
              // color: "red",
              height: "25px",
              // width: "30px",
              [`span`]: {
                width: "10px",
                height: "10px",
              },
            },
          }}
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <div className="flex justify-between items-center px-4 h-[61px] border-b mb-6">
            <img
              src="/logo.svg"
              alt=""
              height="100px"
              // style={{ height: "60px" }}
              onClick={() => setCollapsed(!collapsed)}
              className="cursor-pointer"
            />
            <button>
              <img
                src="/icons/sidebar-left.svg"
                alt=""
                onClick={() => setCollapsed(!collapsed)}
                className="cursor-pointer"
              />
            </button>
          </div>

          <MenuItem
            icon={<DashboardIcon height="20px" width="20px" />}
            component={<Link to="/" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            icon={<PersonIcon height="20px" width="20px" />}
            component={<Link to="/about" />}
          >
            {" "}
            About
          </MenuItem>
          <SubMenu
            defaultOpen
            label="Carts"
            icon={<ArchiveIcon height="20px" width="20px" />}
          >
            <MenuItem icon={<ValueIcon />}>Live Chat</MenuItem>
            <MenuItem icon={<ValueIcon />}>Approved Carts</MenuItem>
            <MenuItem icon={<ValueIcon />}>Review Carts</MenuItem>
          </SubMenu>

          <MenuItem
            icon={<GearIcon height="20px" width="20px" />}
            component={<Link to="/error" />}
          >
            {" "}
            Settings
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default AppSidebar;
