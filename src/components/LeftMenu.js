import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { MdOutlineCategory } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
function LeftMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Sidebar collapsed={!isSidebarOpen}>
      <button  className='btn ms-3 mt-2' onClick={toggleSidebar}><IoIosMenu style={{fontSize:"24px"}}/></button>
          <Menu>        
          <SubMenu  label="Category" icon={<MdOutlineCategory />}>
            <MenuItem component={<Link to="/artists"></Link>}>Artists</MenuItem>
            <MenuItem component={<Link to="/storywriters"></Link>}>StoryWriters</MenuItem>
            <MenuItem component={<Link to="/developers"></Link>}>Developers </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default LeftMenu;
