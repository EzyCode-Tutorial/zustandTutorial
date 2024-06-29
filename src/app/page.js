"use client";

import useBookStore from "./_store/bookStore";

export default function Home() {
	// const numOfBook = useBookStore((state) => state.numberOfBooks);
	// const addBook = useBookStore((state) => state.addBook);
	// const sellBook = useBookStore((state) => state.sellBook);

	// const { numOfBook, addBook, sellBook } = useBookStore((state) => ({
	// 	numOfBook: state.numberOfBooks,
	// 	addBook: state.addBook,
	// 	sellBook: state.sellBook,
	// }));

	const { numberOfBooks, addBook, sellBook } = useBookStore((state) => state);

	return (
		<div className='flex max-w-4xl mx-auto justify-center items-center min-h-screen'>
			<div className='flex flex-col gap-5'>
				<p className='text-slate-700 font-bold text-2xl'>
					Number of Books : {numberOfBooks}
				</p>
				<p className='flex gap-5'>
					<button
						onClick={() => addBook()}
						className='border border-sky-500 px-5 py-1'
					>
						Add Book in Store
					</button>
					<button
						onClick={() => sellBook()}
						className='border border-sky-500 px-5 py-1'
					>
						Sell Book
					</button>
				</p>
			</div>
		</div>
	);
}
