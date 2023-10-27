import React from 'react'

const Ingredient = ({name}) => {
  return (
    <>
        {<div className={`ingredient ${name}`}></div>}
    </>
  )
}

export default Ingredient