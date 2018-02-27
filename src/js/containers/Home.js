import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component {
  componentDidMount () {
    document.title = 'Soft Touch Flowers | Home';
  }

  render () {
    return (
      <div class='jumbotron j-image'>
        <h1>Welcome</h1>

        <p>We pride ourselves on the personal touch added to each and every wedding no matter how large or small. We would love to be a part of your special day and look forward to speaking with you soon!</p>
        <p><Link to='/about' className='button'>Learn more</Link></p>
      </div>
    )
  }
}
