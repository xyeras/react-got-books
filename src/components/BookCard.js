const BookCard = ( { bookPosts } ) => {

    return (
        <div className="row">
            {bookPosts.map( (book, index) => {
                return (
                    <div className ="card d-flex col-4" key={index}>
                        <div className="card-body">
                            <div className="card-title display-6">
                                <strong>Title:</strong>{' '}{book.name}
                            </div>
                            
                            <div className="card-text">
                                <strong>ISBN:</strong>{' '}{book.isbn}
                            </div>

                            <div className="className">
                                    <strong>Author(s):</strong>{' '}
                                    {book.authors.map( (author, index) => {
                                        return (
                                            <div key={index}>
                                                {author}
                                            </div>
                                        );
                                    })}
                            </div>
                            
                            <div className="card-text">
                                <strong>Number of Pages:</strong>{' '}{book.numberOfPages}
                            </div>
                            
                            <div className="card-text">
                                <strong>Country:</strong>{' '}{book.country}
                            </div>

                            <div className="card-text">
                                <strong>Released date:</strong>{' '}{book.released.slice(0,10)}
                            </div>

                        </div>
                    </div>
                );
            })}
        </div>
    );

}

export default BookCard;