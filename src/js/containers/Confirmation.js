import React from 'react'

export default class Confirmation extends React.Component {
  componentDidMount () {
    document.title = 'Soft Touch Flowers | Contact';
  }

  render () {
    return (
      <div class='container'>
        <h1>Success!</h1>
        <p>We have received your message and will get back to you as soon as possible.</p>
      </div>
    )
  }
}
