import React from 'react';
import Photo from './photo'

const DogDiv = (props) => {
  const displayDogs = () => {
    return props.photos.map(photo => {
      return <Photo url={photo.url}/>;
    });
  }
  return <>
<section>{displayDogs()}</section>
  </>
}

export default DogDiv;