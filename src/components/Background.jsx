import React from 'react'
import { Button } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Background = () => {
  return (
    <section className='fluid background-section py-5 mb-5'>
        <div className='container py-5'>
            <div className='row'>
                <div className='col-md-6 col-12 pt-5'>
                    <h1 className='pt-4 mb-3 fw-bold title'>Let's Create Your<br/> Dream Inferior</h1>
                    <p>Maecenas diam nisi, ultricies sit amet lectus vestibulum, molestie pulvinar augue. Nunc vel nisi sit amet neque vestibulum viverra. Cras et gravida orci, vitae vulputate magna.</p>
                    <Button variant='dark' className='mb-5 mt-3 background-btn'>Get Started <FaArrowRight/> </Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Background