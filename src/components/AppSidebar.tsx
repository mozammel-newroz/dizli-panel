import {
  ArchiveIcon,
  DashboardIcon,
  DotsVerticalIcon,
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
    <div className="flex justify-between flex-col  ">
      <Sidebar
        backgroundColor="#fff"
        onBackdropClick={() => setToggled(false)}
        collapsed={collapsed}
        width="280px"
        collapsedWidth="90px"
        style={{ borderRight: "1px solid #ddd", height: "calc(100vh - 50px)" }}
        // className="border-r"
      >
        <Menu
          rootStyles={{
            [`.ps-menu-button`]: { margin: "10px", borderRadius: "8px" },
            [`.ps-menu-icon`]: {
              color: "#333",
              height: "30px",
              width: "30px",
            },
            [`.ps-submenu-expand-icon`]: {
              // color: "red",
              height: "27px",
              // width: "30px",
              [`span`]: {
                width: "5px",
                height: "5px",
              },
            },
            [`.ps-submenu-expand-icon span`]: {
              width: "10px",
              height: "10px",
              color: "#666",
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
      <div className="h-[50px]  flex items-center justify-between px-4 gap-2 border-t border-r">
        <div className="flex items-center gap-2 ">
          <div className="p-2 rounded-full bg-stone-200">
            <PersonIcon />
          </div>
          {
            !collapsed && "Jhon Doe"
          }
          
        </div>
        <DotsVerticalIcon className="cursor-pointer" />
      </div>
    </div>
  );
};

export default AppSidebar;
