/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import './Hamburger.css'
import PropTypes from 'prop-types'

const Hamburger = ({ isActive }) => (
  <div className={`hamburger hamburger--vortex ${isActive ? 'is-active' : ''}`}>
    <span className="hamburger-box">
      <span className="hamburger-inner" />
    </span>
  </div>
)

Hamburger.defaultProps = {
  isActive: false,
}

Hamburger.propTypes = {
  isActive: PropTypes.bool,
}

export default Hamburger
