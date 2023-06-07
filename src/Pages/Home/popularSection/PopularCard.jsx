import React from 'react';

const PopularCard = ({cls}) => {
    console.log(cls)
    const  {instructor_image_url,instructor_name,instructor_email,category,number_of_students} = cls
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10 rounded h-[202px]">
    <img  src={instructor_image_url} alt="Shoes" className="rounded-xl w-80  h-[202px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{instructor_name}</h2>
    <p>Email: {instructor_email}</p>
    <p>Category: {category}</p>
    <p>Number of Students: {number_of_students}</p>
  </div>
</div>
    );
};

export default PopularCard;