import React from 'react'

export default class Contact extends React.Component {
  componentDidMount () {
    document.title = 'Soft Touch Flowers | Contact';
  }

  render () {
    return (
      <div class='container'>
        <h1>Contact</h1>
        <div class='row'>
          <div class='col-md-8 vertical-rule'>
            <form id='contactForm' method='post'>
              <div class='input-group'>
                <div class='has-float-label'>
                  <input id='name' type='text' name='name' placeholder=' ' required autofocus />
                  <label for='name'>name</label>
                </div>
              </div>

              <div class='input-group'>
                <div class='has-float-label'>
                  <input id='email' type='email' name='email' placeholder=' ' required />
                  <label for='email'>email</label>
                </div>
              </div>

              <div class='input-group'>
                <div class='has-float-label'>
                  <textarea id='message' name='message' placeholder=' ' rows='5' required></textarea>
                  <label for='message'>message</label>
                </div>
              </div>

              <input id='sendBtn' type='button' value='Send' class='button' />
            </form>
          </div>

          <div class='col-md-4'>
            <h1><strong>336.406.5676</strong></h1>
            <h3>5620 Old Valley School Road<br/>
              Kernersville, NC 27284</h3>
            <h3><a href='https://www.facebook.com/softtouchflowersandgifts/' target='_blank'>
                <i class='fa fa-facebook'></i> /softtouchflowersandgifts</a></h3>
            <h3><a href='https://www.pinterest.com/softtouchflowrs/' target='_blank'>
                <i class='fa fa-pinterest'></i> /softtouchflowrs</a></h3>
            <h3><a href='mailto:softtouchflowrs@gmail.com' target='_blank'>
                <i class='fa fa-envelope'></i> softtouchflowrs@gmail.com</a></h3>
          </div>
        </div>
      </div>
    )
  }
}
