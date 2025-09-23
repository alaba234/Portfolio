import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const booksData = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    imageUrl: '/atomicHabits.jpg',
    description:
      'A practical guide to building good habits and breaking bad ones.',
  },
  {
    title: 'Lord of the Rings - The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    imageUrl: './lotr.jpg',
    description:
      'As a huge fan of the movie adpations, I had to read the books as well. The first book is a great introduction to the world of Middle-earth.',
  },
  {
    title: 'A song of Ice and Fire - A Game of Thrones',
    author: 'George R.R. Martin',
    imageUrl: './gameOfThrones.jpg',
    description:
      'Never ever have I read a book that was so hard to put down. I became obsessed with this world and read everything George R.R. Martin has written about it.',
  },
  {
    title: 'The subtle art of not giving a f*ck',
    author: 'Mark Manson',
    imageUrl: './subtleArt.jpg',
    description:
      "Helped me with my mindset and how to approach life's challenges.",
  },
  {
    title: 'The Man in the High Castle',
    author: 'Philip K. Dick',
    imageUrl: './manInTheHighCastle.jpg',
    description:
      'Explores a fascinating "What If" scenario and sparked a huge interest in my countries dark history',
  },
]

const BooksPage = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/', { state: { scrollTo: 'hobbies' } })
  }

  return (
    <div className="bg-dark-theme-bg text-dark-theme-text min-h-screen py-16 px-8 md:px-16 lg:px-24">
      {/* Header with arrow on far left and title centered */}
      <div className="relative flex items-center justify-center mb-12">
        <button
          onClick={handleBackClick}
          className="absolute left-0 text-white hover:text-gradient-start transition-colors duration-300">
          <FaArrowLeft size={28} />
        </button>
        <h2 className="text-4xl font-bold text-white text-center">
          Books that I love
        </h2>
      </div>

      {/* Subtitle */}
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
        These books have influenced my perspectives, motivation, and
        self-growth.
      </p>

      {/* Scrollable books list */}
      <div className="flex flex-nowrap overflow-x-auto gap-6 pb-4">
        {booksData.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 
                       transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gradient-start/30">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-80 object-cover rounded-md mb-4"
            />
            <h4 className="text-xl font-bold text-gradient-start mb-1">
              {item.title}
            </h4>
            <p className="text-base text-gray-400 mb-2">{item.author}</p>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BooksPage
