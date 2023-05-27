/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import PropTypes, { any } from 'prop-types'
import cardList from './CardList.module.css'
import Card from '../Card/Card'

const CardList = ({ elements }) => (
  <div className={cardList.styles}>
    {elements.map((el, index) => {
      const key = `${el.link} + ${index}`
      return (
        <Card
          key={key}
          header={el.header}
          footer={el.footer}
          icon={el.icon}
          text={el.text}
          link={el.link}
          button={el.button}
          date={el.date}
          event={el.event}
          location={el.location}
          save={el.save}
          facebook={el.facebook}
          twitter={el.twitter}
          hour={el.hour}
        />
      )
    })}
  </div>
)

CardList.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.objectOf(any)).isRequired,
}

export default CardList
