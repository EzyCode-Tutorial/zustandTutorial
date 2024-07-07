"use client";

import useBookStore, { useMyShop } from "./_store/bookStore";
import { addBook, sellBook } from "./_store/bookStore";

export default function Home() {
	const { numberOfBooks } = useBookStore();
	const { numberBooks, totalAmount, increaseBook } = useMyShop();

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

				<div>
					<p>
						Total Number of Books :
						<span className='text-2xl text-green-700'> {numberBooks} </span>and
						Amount :
						<span className='text-2xl text-green-700'>{totalAmount}</span>
					</p>
					<p>
						<button
							className='px-10 py-1 border border-orange-700'
							onClick={increaseBook}
						>
							Increase Books
						</button>
					</p>
				</div>
			</div>
		</div>
	);
}
