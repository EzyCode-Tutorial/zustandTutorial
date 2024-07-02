"use client";

import { useNewBookStore } from "../_store/bookStore";
import { useRef } from "react";
import { v4 as uuid } from "uuid";
function NewBookStorePage() {
	const { books, addBook, removeBook } = useNewBookStore((state) => state);
	const titleRef = useRef();
	const authorRef = useRef();

	const handleAutherData = () => {
		const titleName = titleRef.current.value;
		const autherName = authorRef.current.value;
		const id = uuid();
		const newBook = {
			id,
			title: titleName,
			auther: autherName,
		};
		addBook(newBook);
	};
	return (
		<div className='max-w-xl mx-auto flex flex-col gap-5 justify-center items-center min-h-screen'>
			<h1 className='text-3xl text-sky-600 font-bold'>My Book Store</h1>
			<div className='w-full'>
				<form>
					<div className='flex flex-col w-full gap-2'>
						<label>Book Title</label>
						<input
							className='border border-sky-500 outline-none p-1'
							type='text'
							ref={titleRef}
						/>
					</div>
					<div className='flex flex-col w-full gap-2 my-4'>
						<label>Auther Name</label>
						<input
							className='border border-sky-500 outline-none p-1'
							type='text'
							ref={authorRef}
						/>
					</div>
				</form>
				<div>
					<button
						onClick={handleAutherData}
						className='border border-orange-500 px-10 py-1'
					>
						Add New Book
					</button>
				</div>

				{books.length > 0 &&
					books.map((book) => {
						return (
							<div className='grid grid-cols-3 my-2 border border-slate-600 p-1'>
								<div>{book.title}</div>
								<div>{book.auther}</div>
								<div>
									<button
										onClick={() => removeBook(book.id)}
										className='text-white bg-red-600 p-1'
									>
										Delete
									</button>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default NewBookStorePage;
