import React from 'react'
import { Button, Card,  } from 'react-bootstrap';
import { FaArrowAltCircleRight } from 'react-icons/fa';


const Cards = () => {
  return (
    <div className='container pt-3 pb-5 cards-container'>
        <div className='row '>
    <div className='col-md-4 col-12'>
    <Card  className=' mb-3 shadow-sm border-0'>
  <Card.Body className='text-center'>
    <Card.Title className='fw-bold title'>Standard</Card.Title>
    <Card.Text className='cards-text'>
      Morbi malesuada consectetur malesuada. Etiam laoreet gravida tortor in semper. Cras vitae pharetra leo. Nam dictum nibh non sapien tristique aliquam.
    </Card.Text>
    <Button variant="">Learn More <FaArrowAltCircleRight/></Button>
  </Card.Body>
</Card>
    </div>
    <div className='col-md-4 col-12'>
    <Card  className=' mb-3 shadow-sm border-0'>
  <Card.Body className='text-center'>
    <Card.Title className='fw-bold title'>Premium</Card.Title>
    <Card.Text className='cards-text'>
      Morbi malesuada consectetur malesuada. Etiam laoreet gravida tortor in semper. Cras vitae pharetra leo. Nam dictum nibh non sapien tristique aliquam.
    </Card.Text>
    <Button variant="">Learn More <FaArrowAltCircleRight/></Button>
  </Card.Body>
</Card>
    </div>
    <div className='col-md-4 col-12'>
    <Card  className=' mb-3 shadow-sm border-0'>
  <Card.Body className='text-center'>
    <Card.Title className='fw-bold title'>Classic</Card.Title>
    <Card.Text className='cards-text'>
      Morbi malesuada consectetur malesuada. Etiam laoreet gravida tortor in semper. Cras vitae pharetra leo. Nam dictum nibh non sapien tristique aliquam.
    </Card.Text>
    <Button variant="">Learn More <FaArrowAltCircleRight/></Button>
  </Card.Body>
</Card>
    </div>
  </div>
  </div>
  )
}

export default Cards