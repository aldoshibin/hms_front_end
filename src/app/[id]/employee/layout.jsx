"use client";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiNotepadDuotone } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineBars3 } from "react-icons/hi2";


export default function EmployeeLayout({ children, params }) {
  // const { id } = params; // Get dynamic ID
const { id } = "123";
const pathname = usePathname();
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

          <SidebarItem icon={<MdOutlineSpaceDashboard size={18} />} label="Dashboard" href={`/abc/admin/dashboard`}/>
          <SidebarItem icon={<PiNotepadDuotone size={18} />} label="Appointments" href={`/abc/admin/appointment`}/>
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
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <div>
            <button className="">
              <HiOutlineBars3 size={18}/>
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

// function SidebarItem({ icon, label }) {
//   return (
//     <button className="w-full flex items-center gap-3 text-white px-3 py-2 hover:bg-[#141414] rounded-md cursor-pointer text-sm">
//       {icon}
//       <span>{label}</span>
//     </button>
//   );
// }
// function SidebarItem({ icon, label, href }) {
//   console.log(href)
//   return (
//     <Link
//       href={href}
//       className="w-full flex items-center gap-3 text-white px-3 py-2 hover:bg-[#141414] rounded-md cursor-pointer text-sm"
//     >
//       {icon}
//       <span>{label}</span>
//     </Link>
//   );
// }

function SidebarItem({ icon, label, href ,active }) {
  
  const classes =
    "w-full flex items-center gap-3 text-white px-3 py-2 hover:bg-[#141414] rounded-md cursor-pointer text-sm";

  // If href is missing, fall back to a <button>
  if (!href) {
    return (
      <button type="button" className={classes}>
        {icon}
        <span>{label}</span>
      </button>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon}
      <span>{label}</span>
    </Link>
  );
}

// function SidebarItem({ icon, label, href, active }) {
//   const base =
//     "w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm";
//   const activeClass = active
//     ? "bg-gray-800 text-white"
//     : "text-gray-300 hover:bg-gray-700 hover:text-white";

//   return (
//     <Link href={href} className={`${base} ${activeClass}`}>
//       {icon}
//       <span>{label}</span>
//     </Link>
//   );
// }


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
