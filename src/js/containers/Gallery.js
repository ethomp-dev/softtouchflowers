import React from 'react'

import { galleryData } from '../data'

import GalleryTile from '../components/GalleryTile'

export default class Gallery extends React.Component {
  componentDidMount () {
    document.title = 'Soft Touch Flowers | Gallery';
  }

  render () {
    const galleries = galleryData.map((gallery, i) => {
      return (
        <div key={i} class="col-md-3">
          <GalleryTile gallery={gallery} />
        </div>
      )
    })

    return (
      <div class='container'>
        <h1>Gallery</h1>

        <div class='row'>
          {galleries}
        </div>
      </div>
    )
  }
}
