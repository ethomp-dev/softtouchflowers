import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './containers/Layout'

import Home from './containers/Home'
import About from './containers/About'
import Gallery from './containers/Gallery'
import GalleryPhotos from './containers/GalleryPhotos'
import Testimonials from './containers/Testimonials'
import Tips from './containers/Tips'
import Contact from './containers/Contact'
import Vendors from './containers/Vendors'
import Confirmation from './containers/Confirmation'

const app = document.getElementById('app')

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
      <Route path='/about' name='about' component={About} />
      <Route path='/gallery' name='gallery' component={Gallery} />
      <Route path='/gallery-photos/:name' name='gallery-photos' component={GalleryPhotos} />
      <Route path='/testimonials' name='testimonials' component={Testimonials} />
      <Route path='/tips' name='tips' component={Tips} />
      <Route path='/preferred-vendors' name='preferred-vendors' component={Vendors} />
      <Route path='/contact' name='contact' component={Contact} />
      <Route path='/confirm' name='confirm' component={Confirmation} />
    </Route>
  </Router>
, app)
