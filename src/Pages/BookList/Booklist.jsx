import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utilits/utilits';
import { useLoaderData } from 'react-router';
const BookList = () => {
    const [readBooks, setReadBooks] = useState([])
    const [sort, setSort] = useState('')
    const books = useLoaderData()
    useEffect(() => {
        const readBooksId = getStoredBook()
        // console.log(typeof readBooksId[1]);
        // const ConvertedStoredBooks = readBooksId.map(id => parseInt(id))
        const readBooks = books.filter(book => readBooksId.includes(book.bookId))

        setReadBooks(readBooks)
    }, [books])

    const handleSort = (type) => {
        // console.log(type);
        setSort(type)
        if(type === "rating"){
            const sortByRating = [...readBooks].sort((a,b) =>a.rating - b.rating)
            setReadBooks(sortByRating);
        }
        if(type === "pages"){
            const sortByRating = [...readBooks].sort((a,b) =>a.totalPages - b.totalPages)
            setReadBooks(sortByRating);
        }
    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-center py-6">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Sort</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleSort("rating")}><a>Rating</a></li>
                        <li onClick={() => handleSort("pages")}><a>Pages</a></li>
                    </ul>
                </div>
            </div>
            <div className="py-8">
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>WishList Book</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Read Books {readBooks.length}</h2>
                        <div className="space-y-4">
                            {
                                readBooks.map(book => <div key={book.bookId} className="card card-side bg-base-100 shadow-sm">
                                    <figure>
                                        <img className='w-48'
                                            src={book.image}
                                            alt="Movie" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {book.bookName}
                                            {/* <div className="badge badge-secondary">NEW</div> */}
                                        </h2>
                                        <p>By: {book.author}</p>
                                        <p>Rating: {book.rating}</p>
                                        <p>Total Pages: {book.totalPages}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn bg-[#23BE0A] text-white">View Details</button>

                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>WishList Book</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default BookList;