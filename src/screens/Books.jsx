import React from 'react'
import BookCard from '../components/card';

const Books = () => {
    const database = [
        {
          id: "1",
          bookName: "book1",
        },
        {
          id: "2",
          bookName: "book2",
        },
        {
          id: "3",
          bookName: "book3",
        }
    ];
  return (
    <div>
        <h1> Welcome to Bond Tracker!</h1>
        {database.map((data, i) => { 
            return (<BookCard bookId={data.id} bookName={data.bookName} key={i} />)
        })}
    </div>
  )
}

export default Books