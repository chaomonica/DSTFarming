import React from 'react';
import {Link} from 'react-router-dom';

const Main = () => {

  return (
  <>
    <p>this is the main page</p>
    <Link to={'/DST'}><button>DST</button></Link>
    <Link to={'/test'}><button>Test</button></Link>
  </>
  )


}

export default Main;