import React from 'react';
import '../css/singlecontent.scss';

const SingleContent = ({
  id,
  poster,
  backdrop,
  title,
  date,
  description,
  rating,
  isLargeRow,
}) => {
  return (
    <>
      <img
        key={id}
        className={`content-poster ${isLargeRow && 'content-posterLarge'}`}
        src={`${isLargeRow ? poster : backdrop}`}
      ></img>
    </>
  );
};

export default SingleContent;
