"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FiMail, FiClock, FiPhone, FiMapPin } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";

import { useState } from "react";



export default function AppointmentTable({ data }) {
  const [search, setSearch] = useState("");

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow p-5">

      {/* ---------------- HEADER ---------------- */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">Appointments</h2>

        <Input
          placeholder="Search"
          className="w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ---------------- TABLE ---------------- */}
      <div className="border rounded-xl">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">

              <TableHead>Patient Name</TableHead>
              <TableHead>Appointment Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Mobile</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Disease</TableHead>
              <TableHead className="text-right">Action</TableHead>

            </TableRow>
          </TableHeader>

          <TableBody>
            {filtered.map((item, i) => (
              <TableRow key={i}>

                {/* Patient Name + Image */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                </TableCell>

                {/* Date */}
                <TableCell>{item.date}</TableCell>

                {/* Time */}
                <TableCell>
                  <div className="flex items-center gap-1 text-slate-700">
                    <FiClock className="text-blue-500" />
                    {item.time}
                  </div>
                </TableCell>

                {/* Email */}
                <TableCell>
                  <div className="flex items-center gap-1">
                    <FiMail className="text-red-500" />
                    {item.email}
                  </div>
                </TableCell>

                {/* Mobile */}
                <TableCell>
                  <div className="flex items-center gap-1">
                    <FiPhone className="text-green-600" />
                    {item.mobile}
                  </div>
                </TableCell>

                {/* Gender Badge */}
                <TableCell>
                  <Badge
                    className={`${
                      item.gender === "male"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-purple-100 text-purple-600"
                    } capitalize`}
                  >
                    {item.gender}
                  </Badge>
                </TableCell>

                {/* Status Badge */}
                <TableCell>
                  <Badge
                    className={`${
                      item.status === "Upcoming"
                        ? "bg-green-100 text-green-600"
                        : item.status === "Completed"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
                  </Badge>
                </TableCell>

                {/* Address */}
                <TableCell>
                  <div className="flex items-center gap-1">
                    <FiMapPin className="text-blue-500" />
                    {item.address}
                  </div>
                </TableCell>

                {/* Disease */}
                <TableCell>{item.disease}</TableCell>

                {/* Action Dropdown */}
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button variant="ghost" size="icon">
                        <BiDotsVerticalRounded size={20} />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-32">
                      <DropdownMenuItem className="cursor-pointer">
                        ✔ Approve
                      </DropdownMenuItem>

                      <DropdownMenuItem className="cursor-pointer text-red-600">
                        ✖ Cancel
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
