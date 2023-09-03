'use client'
import Image from 'next/image'
import data from '../books.json'
import { useState } from 'react';
export interface Book {
  title:    string;
  pages:    number;
  genre:    string;
  cover:    string;
  synopsis: string;
  year:     number;
  ISBN:     string;
  author:    {
    name:       string;
    otherBooks: string[];
  }
}

const books: Book[] = data.library.map((data) => data.book)
const genres: string[] = Array.from(new Set(books.map(book => book.genre)))

export default function Home() {
  const [genre, setGenre] = useState<Book["genre"]>("")
  const [readList, setReadList] = useState<Book["ISBN"][]>([])
  const matches = genre ? books.filter(book => {
    if (book.genre !== genre) return false
    return true
  }) : books;

  function handleBookClick(book: Book["ISBN"]) {
    setReadList(readList => readList.includes(book) ? readList.filter(readBook => readBook !== book) : [...readList, book],)
  }
  console.log(readList)
  return (
    <article className='grid gap-4'>
    <div className='flex justify-between'>
    <nav>
        <select value={genre} onChange={(event) => setGenre(event.target.value)}>
          <option value="">Todos</option>
          {genres.map(genre => (
            <option value={genre} key={genre}>{genre}</option>
          ))}
        </select>
      </nav>
      <nav>
      <span>Lista de deseos {readList.length}</span>
      <ul>
      </ul>
      </nav>
    </div>
    <ul className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'>
      {matches.map((book) => (
        <li className='grid gap-4' key={book.ISBN} onClick={() => handleBookClick(book.ISBN)}>
          <Image className='aspect-[9/14] object-cover' width={500} height={500} src={book.cover} alt={book.title} />
          <p> {readList.includes(book.ISBN) && <span>🌠 </span>}{book.title}</p>
        </li>
      ))}
    </ul>
    </article>
  )
}

