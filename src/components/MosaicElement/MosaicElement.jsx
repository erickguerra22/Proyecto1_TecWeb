/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import PropTypes from 'prop-types'
import mosaicElement from './MosaicElement.module.css'

const MosaicElement = ({
  link, image, title, price, discount, soldOut, columns, gridColumn,
}) => (
  <a className={mosaicElement.styles} href={link} style={{ gridColumn: `${gridColumn || `span ${columns}`}` }}>
    <figure style={{ position: 'relative' }}>
      <img src={image} alt="title" />
      <img
        alt="sold-out"
        src="https://www.sleep-token.com/wp-content/themes/sleeptoken4/img/sold-out-banner-bw.png"
        style={{
          display: `${soldOut ? 'block' : 'none'}`,
          position: 'absolute',
          top: 0,
          left: 0,
          padding: 'inherit',
          boxSizing: 'border-box',
        }}
      />
    </figure>
    <h3>{title}</h3>
    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
      {discount && <p style={{ color: 'gray', fontSize: '7px' }}>FROM: </p>}
      <p style={{ fontSize: '11px' }}>
        {`£${price.toFixed(2)} `}
      </p>
    </div>
    <p>Inc. VAT</p>
  </a>
)

MosaicElement.defaultProps = {
  discount: false,
  soldOut: false,
  gridColumn: undefined,
}

MosaicElement.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.bool,
  soldOut: PropTypes.bool,
  columns: PropTypes.number.isRequired,
  gridColumn: PropTypes.string,
}

export default MosaicElement
