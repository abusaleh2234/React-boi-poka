import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utilits/utilits';
import { useLoaderData } from 'react-router';
const BookList = () => {
    const [readBooks, setReadBooks] = useState([])
    const books = useLoaderData()
    useEffect(() => {
        const readBooksId = getStoredBook()
        // console.log(typeof readBooksId[1]);
        // const ConvertedStoredBooks = readBooksId.map(id => parseInt(id))
        const readBooks = books.filter(book => readBooksId.includes(book.bookId))
        
        setReadBooks(readBooks)
    },[books])
    return (
        <div className="max-w-7xl mx-auto">
            <div className="py-8">
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>WishList Book</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Read Books</h2>
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