import React from 'react';

const Photo = (props) => {
  return ( <div>
      <img src={props.url} alt="a dog"/>
    </div>
  )
}
export default Photo;