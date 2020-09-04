import React from 'react';

const Photo = (props) => {
  return ( <div>
      <img className="dogPhoto" src={props.url} alt="a dog"/>
    </div>
  )
}
export default Photo;