import React from "react"

const Maybe = (props) => {
  return props.if ? props.children : <></>
}

export default Maybe
