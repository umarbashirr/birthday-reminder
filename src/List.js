import React from 'react';

const List = ({ birthdayData }) => {
  return (
    <>
      {birthdayData.map((data) => {
        return (
          <div className='person'>
            <img src={data.image} alt={data.name} />
            <div>
              <h4>{data.name}</h4>
              <p>{data.age} Year Old</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
