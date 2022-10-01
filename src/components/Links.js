import React from 'react'

function Links(props) {
  return (
    <div id="links">
    <h3>Links</h3>
    <a href={props.github}>github</a>
    <a href={props.linkedin}>Linkedin</a>
  </div>
  )
}

export default Links