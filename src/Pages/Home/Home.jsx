import { Suspense } from 'react';
import Banner from '../../Component/Banner/Banner';
import Books from '../../Component/Books/Books';
// import { useLoaderData } from 'react-router';

const Home = () => {
    const booksPromise = fetch("data.json").then(res => res.json())
    // const books = useLoaderData()
    // console.log(books);
    
    return (
        <div className='max-w-7xl mx-auto '>
            <Banner></Banner>
            <Suspense fallback={<h3>Loading ....</h3>}>
                <Books booksPromise={booksPromise}></Books>
                {/* <Books></Books> */}
            </Suspense>
        </div>
    );
};

export default Home;