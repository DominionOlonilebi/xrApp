import React from 'react'
import { Button } from 'react-bootstrap'
import { FaArrowRight, FaServicestack } from 'react-icons/fa6'

const Services = () => {
  return (
    <section className='fluid py-4 service-section mb-5'>
<div className='container'>
        <div className='row d-flex justify-content-center'>
            <div className='col-lg-5 col-12'>
                <h4 className='fw-bold'><FaServicestack className='text-warning'/> &nbsp; Services We Offer<br/> At Affordable Pricing</h4>
                <p className='service-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae nibh vitae magna viverra sodales. Phasellus elementum euismod maximus. Nulla sem risus, tincidunt vel lorem ullamcorper, sagittis ornare dolor. Nulla sollicitudin tincidunt libero, id sagittis magna euismod in.</p>
                <Button variant='dark' className='mb-5'>Purchase <FaArrowRight/> </Button>
            </div>
            <div className='col-lg-5 col-12'>
                <img src='image/xr11.jpg' alt='' className='img-fluid service-img mb-3'/>
            </div>
        </div>
    </div>
    </section>
    
  )
}

export default Services