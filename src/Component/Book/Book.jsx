import React from 'react';

const Book = ({book}) => {
    const {author,image,bookName,publisher,category,rating} =book
    return (
        <div className="card flex-col bg-base-100 shadow-sm">
            <figure className='p-6'>
                <img className='py-8 h-svh px-24 bg-gray-100 rounded-xl'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p>By: {author}</p>
                {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating}</div>
                </div>
            </div>
        </div>
    );
};

export default Book;