//import React from 'react'

// import { PiBookOpenTextLight } from "react-icons/bi";
// import { AiOutLineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsXLg, BsBook } from "react-icons/bs";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full g-[400px] bg-white rounded-x1 p-4 flex flex-col relative"
      >
        <BsXLg
          className="absolute right-6 top-6 text-3x1 text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
            <BsBook className="text-red-300 text-2x1"/>
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2x1" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Anything</p>
        <p className="my-2">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          perspiciatis eligendi nihil sint incidunt optio recusandae in at
          eveniet similique accusantium facilis culpa, quis excepturi temporibus
          illum sed saepe amet.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
