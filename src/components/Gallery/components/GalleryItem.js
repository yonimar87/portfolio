import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({id, source, thumbnail, caption, description, position, toggleLightbox, link}) => {

    const onClick = useCallback((e) => {
        e.preventDefault()
        toggleLightbox(position)
    }, [position, toggleLightbox]);

 // className="6u 12u$(xsmall) work-item"
    return (<article key={id}>
        <a
        className="image fit thumb"
        href={source}
        target="_blank"
          rel="nofollow noreferrer"
        onClick={onClick}
        >
        <img src={thumbnail} />
        </a>

        <a href={link} target="_blank" rel="nofollow noreferrer"><h3>{caption}</h3></a>
        <p>{description}</p>
    </article>)
};

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired
}

export default GalleryItem
