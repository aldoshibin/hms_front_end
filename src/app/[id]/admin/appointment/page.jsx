"use client"
import AppointmentTable from '@/Screens/Admin/Appointment/AppointmentTable'
import React from 'react'
import { appointments } from '@/Screens/Admin/Appointment/data/appointments'

const Appointmentpage = () => {
  return (
    <div>
      <AppointmentTable data={appointments}/>
    </div>
  )
}

export default Appointmentpage