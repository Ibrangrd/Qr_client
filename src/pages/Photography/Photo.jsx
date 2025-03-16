import React from 'react';
import { Link, useParams } from "react-router-dom";
import Error from "../Error";
import dataPhoto from './dataPhoto';
import './photoinfo.css';

const Photo = () => {
    const { PhId } = useParams();
    const data = dataPhoto.find((data) => data.Id === PhId);
    if (data === undefined) {
      return <Error />;
    }

  return (
    <>
    

    
    </>

  );
};
export default Photo;