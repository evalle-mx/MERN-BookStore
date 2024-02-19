import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';


const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect( () => {
    setLoading(true);
    axios
    .get(`http://localhost:5555/books/${id}`)
    .then((response) => {
      console.log(response);
      setTitle(response.data.book.title);
      setAuthor(response.data.book.author);
      setPublishYear(response.data.book.publishYear);
      setLoading(false);
    })
    .catch( (e) => {
      console.log(e); 
      alert('An error ocurred, Phease check console');
      setLoading(false);
    })
  }, []);

  const handleEditBook = () => {
    const data = {
      title, author, publishYear
    };
    setLoading(true);
    axios
    .put(`http://localhost:5555/books/${id}`, data)
    .then( (resp) =>{      
      //console.log(resp); alert('pause');
      setLoading(false)
      navigate('/');
    })
    .catch( (e) => {
      console.log(e);
      alert('An error ocurred, Phease check console');
      setLoading(false);
    })
  }
  return (
    <div className='p-4'>
       <BackButton />
      <h1 className='text-3x1 my-4'> Edit Book </h1>
      { loading?( <Spinner />):
        (
          <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto'>
            <div className='my-4'>
              <span className='text-x1 mr-4 text-gray-500'>Id</span>
              <span>{id}</span>
            </div>

            <div className='my-4'>
              <span className='text-x1 mr-4 text-gray-500'>Title</span>
              <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}
               className='border-2 border-gray-500 px-4 py-2 w-full' />
            </div>

            <div className='my-4'>
              <span className='text-x1 mr-4 text-gray-500'>Author</span>
              <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)}
               className='border-2 border-gray-500 px-4 py-2 w-full' />
            </div>

            <div className='my-4'>
              <span className='text-x1 mr-4 text-gray-500'>Publish Year</span>
              <input type='text' value={publishYear} onChange={(e) => setPublishYear(e.target.value)}
               className='border-2 border-gray-500 px-4 py-2 w-full' />
            </div>

            <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>Save</button>
          </div>
         
        )}
    </div>
  )
}

export default EditBook;