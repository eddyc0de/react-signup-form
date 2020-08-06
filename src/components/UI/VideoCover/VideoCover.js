import React from 'react';
import styles from './VideoCover.module.css';
import videoURI from '../../../assets/cover.mp4';

const VideoCover = () => (
  <video autoPlay loop id={styles.CoverVideo}>
    <source src={videoURI} type="video/mp4"></source>
  </video>
);

export default VideoCover;
