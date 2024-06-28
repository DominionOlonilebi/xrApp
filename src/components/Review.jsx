import React from 'react'
import { Button, Card } from 'react-bootstrap';


const Review = () => {
  return (
    <div className='container review-container pt-5 pb-5 mb-5'>
        <h4 className='mb-4 text-center fw-bold mt-3'>What the People Think About<br/> Kwamra</h4>
        <div className='row d-flex justify-content-center mx-3'>
    <div className='col-lg-4 col-12'>
    <Card  className=' mb-3 pt-3 pb-2 border-0'>
  <Card.Body >
    <Card.Title>
      <div className='d-flex flex-row'>
      <img src='image/xrk7.jpg' alt='' width={50} height={50} className='image'/> <span className='mx-3 mt-3 card-img-text'>Gladys Bright</span> 
      </div>
      </Card.Title>
    <Card.Text className='review-text'>
      Morbi malesuada consectetur malesuada. Etiam laoreet gravida tortor in semper. Cras vitae pharetra leo. Nam dictum nibh non sapien tristique aliquam.
    </Card.Text>
  </Card.Body>
</Card>
    </div>
    <div className='col-lg-4 col-12'>
    <Card  className=' mb-3 pt-3 pb-2 border-0'>
  <Card.Body >
  <Card.Title>
      <div className='d-flex flex-row'>
      <img src='image/xrk5.jpg' alt='' width={50} height={50} className='image'/> <span className='mx-3 mt-3 card-img-text'>Gladys Bright</span> 
      </div>
      </Card.Title>
    <Card.Text className='review-text'>
      Morbi malesuada consectetur malesuada. Etiam laoreet gravida tortor in semper. Cras vitae pharetra leo. Nam dictum nibh non sapien tristique aliquam.
    </Card.Text>
  </Card.Body>
</Card>
    </div>
    <div className='col-lg-4 col-12'>
    <Card  className='mb-3 pt-3 pb-2 border-0'>
  <Card.Body >
  <Card.Title>
      <div className='d-flex flex-row'>
      <img src='image/xrk7.jpg' alt='' width={50} height={50} className='image'/> <span className='mx-3 mt-3 card-img-text'>Gladys Bright</span> 
      </div>
      </Card.Title>
          <Card.Text className='review-text'>
      Morbi malesuada consectetur malesuada. Etiam laoreet gravida tortor in semper. Cras vitae pharetra leo. Nam dictum nibh non sapien tristique aliquam.
    </Card.Text>
  </Card.Body>
</Card>
    </div>
  </div>
    </div>
  )
}

export default Review