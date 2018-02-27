import React from 'react'
import { Link } from 'react-router'

export default class GalleryTile extends React.Component {
  render () {
    const { name } = this.props.gallery

    return (
      <Link to={`/galleryPhotos/${name}`} params={{ name: name }} className='thumbnail thumbnail-folder'>
        <img src={`../../img/galleries/weddings/${name}/1.jpg`} alt={name} />
        <p>{name}</p>
      </Link>
    )
  }
}
