/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import PropTypes from 'prop-types'
import video from './Video.module.css'

const Video = ({ src }) => (
  <div className={video.styles}>
    <iframe
      width="526"
      height="321"
      src={src} // "https://www.youtube.com/embed/vFHBOKa_ZG0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
)

Video.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Video
