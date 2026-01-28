import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RighAside from '../components/homelayout/RighAside';
import NewDetailsCard from './NewDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data=useLoaderData()
    const {id}=useParams()
    const [news,setNews]=useState({})
    // console.log(data,id ,news)
    useEffect(()=>{
        const newsDetails=data.find(single=>single.id==id)
        setNews(newsDetails)
    },[id,data])
    return (
        <div className='w-11/12 mx-auto bg-base-100'>
            <header className='pt-4'>
                <Header></Header>
            </header>
            <main className='py-10 grid grid-cols-12 '>
                <section className='w-11/12 mx-auto col-span-9'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                    <NewDetailsCard news={news}></NewDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RighAside></RighAside>
                </aside>
            </main>

        </div>
    );
};

export default NewsDetails;