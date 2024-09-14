import { NavLink } from "react-router-dom";
import cssSidebar from "./Sidebar.module.css";
const Sidebar = props => {
  return (
    <div className='Sidebar'>
      <div className={cssSidebar.container}>
        <NavLink className={cssSidebar.link} to='/about-me'>
          <p>About me</p>
        </NavLink>

        <NavLink className={cssSidebar.link} to='/other'>
          <p>Certification</p>
        </NavLink>
        <NavLink className={cssSidebar.link} to='/portfolio'>
          Portfolio
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
