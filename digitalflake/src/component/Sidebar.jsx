import React from 'react';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar">
    <Link to="/homepage" className="home-link">
        <IoHomeOutline className="home-icon" />
        <span className="home-text">Home</span>
      </Link>
<Link to="/category" className="home-link">
  < BiSolidCategory className="home-icon" />
  <span className="home-text">Category</span>
</Link>
<Link to="/subcategory" className="home-link">
  < BiSolidCategory className="home-icon" />
  <span className="home-text">Subcategory</span>
</Link>
<Link to="/product" className="home-link">
  <  MdProductionQuantityLimits className="home-icon" />
  <span className="home-text">Product</span>
</Link>
      
      
      
    </div>
  );
};

export default Sidebar;