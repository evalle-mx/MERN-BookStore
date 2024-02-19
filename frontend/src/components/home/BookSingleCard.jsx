//import React from 'react'
import { Link } from "react-router-dom";
// import { PiBookOpenTextLight } from "react-icons/bi";
import { BiShow, BiUserCircle } from "react-icons/bi";
// import { AiOutLineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md"; //Temp replace for AiOutLineEdit

import { useState } from "react";
import BookModal from "./BookModal";

import { BsBook } from "react-icons/bs";  //Temp replace for BsBook


const BookSingleCard = ({book}) => {
    const [showModal, setShowModal ]= useState(false);
  return (
    <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-x1">
          <h2 className="absoulute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
            {book.publishYear}
          </h2>
          <h4 className="my-2 text-gray-500">{book._id}</h4>
          <div className="flex justify-start items-center gap-x-2">
            <BsBook className="text-red-300 text-2x1" />
            <h2 className="my-1">{book.title}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-red-300 text-2x1" />
            <h2 className="my-1">{book.author}</h2>
          </div>
          <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
            <BiShow className="text-3x1 text-blue-800 hover:text-black cursor-pointer"
                onClick={() => setShowModal(true)} />
            <Link to={`/books/details/${book._id}`}>
              <BsInfoCircle className="text-2x1 text-green-800 hover:text-black" />
            </Link>
            <Link to={`/books/edit/${book._id}`}>
              <MdOutlineEdit className="text-2x1 text-yellow-600 hover:text-black" />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
              <MdOutlineDelete className="text-2x1 text-red-600 hover:text-black" />
            </Link>
          </div>
          {
            showModal && (
                <BookModal book={book} onClose={() => setShowModal(false)} />
            )
          }
        </div>
  );
}

export default BookSingleCard