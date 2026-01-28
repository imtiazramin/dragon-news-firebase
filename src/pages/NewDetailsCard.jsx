import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewDetailsCard = ({ news }) => {
    const { title,category_id, thumbnail_url, details } = news;
    return (
        <div className='border border-gray-300 rounded-sm bg-white'>
            <div className='px-6 mx-auto py-8'>
                <img className='w-full h-96 rounded-sm object-cover' src={thumbnail_url} alt="" />
                <h2 className='text-2xl font-semibold py-4'>{title}</h2>
                <p className='text-xs text-accent '>{details}</p>
                <Link to={`/category/${category_id}`} className='bg-secondary btn my-5 text-white'><FaArrowLeft size={20} /> All news in this category</Link>
            </div>
        </div>

    );
};

export default NewDetailsCard;