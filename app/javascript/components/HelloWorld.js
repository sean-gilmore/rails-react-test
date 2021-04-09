import React from "react"
import PropTypes from "prop-types"

function HelloWorld(props) {
return <React.Fragment>Greetingi: {props.greeting}</React.Fragment>
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
