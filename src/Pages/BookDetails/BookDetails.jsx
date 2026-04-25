import { useLoaderData, useParams } from 'react-router';
import { addStoredBook } from '../../utilits/utilits';

const BookDetails = () => {
    const { id } = useParams()
    const books = useLoaderData()
    const numberId = parseInt(id)
    const singleBook = books?.find(book => book.bookId === numberId)

    const { author, image, bookName, publisher, review, category, rating, bookId, yearOfPublishing
        , totalPages
    } = singleBook

    const handleReadBook = (id) => {
        // console.log(id);
        addStoredBook(id)
    }

    return (
        <main className='max-w-7xl mx-auto py-10'>
            <div className="card items-center lg:card-side">
                <figure className='bg-gray-100 p-20 w-1/2'>
                    <img className='w-106'
                        src={image}
                        alt="Album" />
                </figure>
                <div className=" w-1/2 p-10 space-y-8">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>

                    <div className="">
                        <p className='border-y-2 border-gray-200 py-4'>By: {category}</p>
                    </div>

                    <p>Review: {review}</p>
                    <div className="">
                        <table >
                            <tbody>
                                <tr className=''>
                                    <td className='pr-10'>Number of Pages</td>
                                    <td>{totalPages}</td>
                                </tr>
                                <tr>
                                    <td>Publisher</td>
                                    <td>{publisher}</td>
                                </tr>
                                <tr>
                                    <td>yearOfPublishing</td>
                                    <td>{yearOfPublishing}</td>
                                </tr>
                                <tr>
                                    <td>Rating</td>
                                    <td>{rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-actions">
                        <a onClick={() => handleReadBook(bookId)} className="btn ">Read</a>
                        <a className="btn bg-[#59C6D2] text-white">WishList</a>
                    </div>
                </div>
            </div>
        </main>

    );
};

export default BookDetails;