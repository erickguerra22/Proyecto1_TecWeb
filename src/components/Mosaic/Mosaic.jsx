/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import PropTypes, { any } from 'prop-types'
import mosaic from './Mosaic.module.css'
import MosaicElement from '../MosaicElement/MosaicElement'

const Mosaic = ({ elements }) => (
  <div className={mosaic.styles}>
    {elements.map((el) => (
      <MosaicElement
        key={el.title}
        link={el.link}
        image={el.image}
        title={el.title}
        price={el.price}
        discount={el.discount}
        soldOut={el.soldOut}
        gridColumn={el.gridColumn}
        columns={el.columns}
      />
    ))}
  </div>
)

Mosaic.defaultProps = {

}

Mosaic.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.objectOf(any)).isRequired,
}

export default Mosaic
