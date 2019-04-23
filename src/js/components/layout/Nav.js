import React from 'react'
import { IndexLink, Link } from 'react-router'

export default class Nav extends React.Component {
  render () {
    return (
      <nav class='navbar navbar-default'>
        <div class='container-fluid container'>
          <div class='navbar-header'>
            <button type='button' class='navbar-toggle collapsed' data-toggle='collapse'
                data-target='#navbar-collapse' aria-expanded='false'>
              <span class='sr-only'>Toggle navigation</span>
              <span class='icon-bar'></span>
              <span class='icon-bar'></span>
              <span class='icon-bar'></span>
            </button>
            <IndexLink to='/' className='navbar-brand'>
              <img src='../../../img/logo-large.png' height='20' alt='Soft Touch Flowers' />
            </IndexLink>
          </div>

          <div class='collapse navbar-collapse' id='navbar-collapse'>
            <ul class='nav navbar-nav'>
              <li><Link to='/about' activeClassName='active'>Our Story</Link></li>
              <li><Link to='/gallery' activeClassName='active'>Photo Gallery</Link></li>
              <li><Link to='/testimonials' activeClassName='active'>Testimonials</Link></li>
              <li><Link to='/tips' activeClassName='active'>Weddings Tips</Link></li>
              <li><Link to='/preferred-vendors' activeClassName='active'>Preferred Vendors</Link></li>
              <li><Link to='/contact' activeClassName='active'>Contact</Link></li>
            </ul>
            <span class='visible-md-block visible-lg-block'>
              <ul class='nav navbar-nav navbar-right'>
                <li><a href='https://www.facebook.com/softtouchflowersandgifts/' target='_blank'>
                  <i class='fa fa-facebook'></i></a></li>
                <li><a href='https://www.pinterest.com/softtouchflowrs/' target='_blank'>
                  <i class='fa fa-pinterest'></i></a></li>
                <li><a href='mailto:softtouchflowrs@gmail.com' target='_blank'>
                  <i class='fa fa-envelope'></i></a></li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    )
  }
}
