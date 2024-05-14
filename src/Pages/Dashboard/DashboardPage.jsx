import path from "path";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const DashboardPage = () => {
  const lists = [
    {
      id: 1,
      name: "Dashboard",
      path: "/Dashboard",
    },
    {
      id: 2,
      name: "Settings",
      path: "Settings",
    },
    {
      id: 3,
      name: "Profile",
      path: "Profile",
    },{
        id: 4,
        name: "Create Product",
        path: "Create-Product",
    },
    {
      id:5,
      name: 'Create PDFs',
      path: 'pdf'
    }
  ];
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl">This is Dashboard Header</h1>
        <nav className="py-5 bg-slate-300">
       
          {
            <ul className="flex gap-3">
              {lists.map((el, i) => {
                return (
                  <li key={el.id}>
                    <NavLink
                      to={el.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-500" : ""
                      }
                    >
                      <li>{el.name}</li>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          }
    
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
