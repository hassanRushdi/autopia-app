import { useState } from 'react'
import SectionHeading from './SectionHeading'

const VehicleGuide = () => {
  return (
    <section className='w-[80%] mx-auto'>
        <SectionHeading heading='VEHICLE SIZE' subHeading='Please Select Vehicle Size' />
        {/* Cursoral */}
        <button className='btn-alt'>Cars Size Guide</button>
    </section>
  )
}

export default VehicleGuide