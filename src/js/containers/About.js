import React from 'react'
import { Link } from 'react-router'

export default class About extends React.Component {
  componentDidMount () {
    document.title = 'Soft Touch Flowers | About';
  }

  render () {
    return (
      <div class='container'>
        <h1>Our Story</h1>

        <div class='thumbnail thumbnail-profile hidden-xs hidden-sm'>
          <img src='../../img/profile.jpg' alt='Diana Sheffield' />
        </div>

        <p>Soft Touch Flowers is a Wedding and Special Event Floral Company; established in 1991. We design wedding flowers at many venues in the Triad Area. We are honored to be a Floral Vendor at Bella Collina Mansion since their Grand Opening in 2013.</p>
        <p>Your wedding is a once in a life-time experience. We would love to assist you in designing the wedding of your dreams. Our professional floral staff will assist you in planning for your special day! Quality and creativity of our designs are exquisite.</p>
        <p>Each and every wedding is unique. We are truly honored and excited to work with each bride and groom by following their wedding journey. We would love to be your Professional wedding floral consultants and designers.</p>
        <p>It is a joy for us to be a part of your wedding from the beginning planning stages. From the morning of your wedding getting to see your excitement as you are preparing for seeing your future spouse for the first time - to the beautiful ceremony - up to the reception. We would love having a special part in it!</p>
        <p>By being a Special Event Florist, we have no set hours. We’re available at your convenience to meet your needs. We love giving you our special undivided attention. Please give us a call to set up a complementary wedding consultation…</p>

        <Link to='contact' className='button'>Contact Us</Link>
      </div>
    )
  }
}
