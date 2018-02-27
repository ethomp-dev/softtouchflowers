import React from 'react'

import { galleryData } from '../data'

export default class GalleryPhotos extends React.Component {
  render () {
    const { name } = this.props.params
    let photoFiles = []

    galleryData.forEach(gallery => {
      if (name == gallery.name)
        photoFiles = gallery.photos
    })

    const photos = photoFiles.map((file, i) => {
      return (
        <div key={i} class='thumbnail'>
          <img src={`../../img/galleries/weddings/${name}/${file}`} />
        </div>
      )
    })

    return (
      <div id='container' class='container'>
      	<div id='columns'>
          {photos}
        </div>
      </div>
    )
  }
}
