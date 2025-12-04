// export default function AdminLayout({ children }) {
//   return (
//     <div className="flex h-screen bg-gray-100">
      
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-lg p-4">
//         <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
//         <ul className="space-y-2">
//           <li><a href="./" className="block p-2 hover:bg-gray-200">Dashboard</a></li>
//           <li><a href="./users" className="block p-2 hover:bg-gray-200">Users</a></li>
//           <li><a href="./reports" className="block p-2 hover:bg-gray-200">Reports</a></li>
//           <li><a href="./settings" className="block p-2 hover:bg-gray-200">Settings</a></li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 overflow-y-auto">
//         {children}
//       </main>

//     </div>
//   );
// }



"use client";

import { FcGoogle } from "react-icons/fc";
// import {
//   Home,
//   Users,
//   Bell,
//   Mail,
//   Layers,
//   LogOut,
//   ChevronDown,
//   FileText,
//   Activity,
//   Settings,
// } from "lucide-react";

export default function AdminLayout({ children, params }) {
  const { id } = params; // Get dynamic ID

  return (
    <div className="flex h-screen bg-gray-50">

      {/* ------------------------------------------------ */}
      {/* LEFT SIDEBAR */}
      {/* ------------------------------------------------ */}
      <aside className="w-72 bg-[#222222] border-r flex flex-col">

        {/* Logo */}
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-600">Cliniva</h1>
        </div>

        {/* Profile Section */}
        <div className="p-4 flex flex-col items-center">
          <img
            src="https://i.pravatar.cc/150?img=47"
            className="w-20 h-20 rounded-full border"
          />
          <h2 className="mt-2 text-sm font-semibold text-white">Sarah Smith</h2>
          <p className="text-sm text-white">ADMIN</p>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">

          <SidebarItem icon={<FcGoogle size={18} />} label="Lab Information" />
          <SidebarItem icon={<FcGoogle size={18} />} label="Blood Donor" />
          <SidebarItem icon={<FcGoogle size={18} />} label="Blood Issued" />

          <SidebarGroup label="Accounts">
            <SidebarItem icon={<FcGoogle size={18} />} label="Account Overview" />
          </SidebarGroup>

          <SidebarGroup label="Departments">
            <SidebarItem icon={<FcGoogle size={18} />} label="All Departments" />
          </SidebarGroup>

          <SidebarItem icon={<FcGoogle size={18} />} label="Inventory" />
          <SidebarItem icon={<FcGoogle size={18} />} label="Human Resources" />
          <SidebarItem icon={<FcGoogle size={18} />} label="Email" />

        </nav>

        {/* Logout */}
        <div className="p-4">
          <button className="w-full bg-red-500 text-white py-3 rounded-lg flex items-center justify-center gap-2">
            <FcGoogle size={18} /> Logout
          </button>
        </div>

      </aside>

      {/* ------------------------------------------------ */}
      {/* RIGHT SIDE - MAIN AREA */}
      {/* ------------------------------------------------ */}
      <div className="flex-1 flex flex-col">

        {/* ---------------- TOP NAV ---------------- */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
          <div>
            <button className="p-2 border rounded-md">
              <FcGoogle />
            </button>
          </div>

          <div className="flex items-center gap-6">
            <FcGoogle className="text-gray-600 cursor-pointer" />
            <span className="text-gray-600">🇺🇸</span>

            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="https://i.pravatar.cc/150?img=12"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">Ella Jones</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* ---------------- MAIN CONTENT ---------------- */}
        <main className="p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

/* ------------------------------------------------ */
/* SIDEBAR COMPONENTS */
/* ------------------------------------------------ */

function SidebarItem({ icon, label }) {
  return (
    <button className="w-full flex items-center gap-3 text-gray-700 px-3 py-2 hover:bg-gray-100 rounded-md">
      {icon}
      <span>{label}</span>
    </button>
  );
}

function SidebarGroup({ label, children }) {
  return (
    <div className="space-y-1">
      <p className="text-xs text-gray-500 uppercase font-semibold mt-4">
        {label}
      </p>
      {children}
    </div>
  );
}
