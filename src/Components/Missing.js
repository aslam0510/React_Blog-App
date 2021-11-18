import React from 'react'
import { Link } from 'react-router-dom';

function Missing() {
  return (
    <div>
      <h1>Page Not Found</h1><br/>
      <Link to="/">Go to our home page</Link>
    </div>
  )
}

export default Missing
