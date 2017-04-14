import React, { Component } from 'react';
import Photo from './Photo';

const PhotoGrid = (props) => (
  <div className="photo-grid">
    {this.props.posts.map((p, i) => <Photo {...this.props } key={i} i={i} post={p}/>)}
  </div>
);

export default PhotoGrid;