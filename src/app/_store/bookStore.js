import { create } from "zustand";
import { devtools } from "zustand/middleware";

const initialState = {
	numberOfBooks: 3,
};
const bookStore = (set) => ({
	...initialState,
});
const useBookStore = create(devtools(bookStore));

export const addBook = () => {
	useBookStore.setState((state) => ({
		numberOfBooks: state.numberOfBooks + 1,
	}));
};

export const sellBook = () => {
	useBookStore.setState((state) => ({
		numberOfBooks: state.numberOfBooks - 1,
	}));
};
export default useBookStore;

// Created New Book Store with Book Details like Title and Auther Name with Book ID
const newBookStore = (set) => ({
	books: [],
	addBook: (book) =>
		set((state) => ({
			books: [book, ...state.books],
		})),
	removeBook: (id) =>
		set((state) => ({
			books: state.books.filter((book) => book.id != id),
		})),
});

export const useNewBookStore = create(newBookStore);

export const useBookShop = create((set, get) => ({
	bookNumber: 0,
	totalAmount: 0,
	increaseBook: () => {
		set((state) => ({ bookNumber: state.bookNumber + 1 }));
		const totalAmount = get().bookNumber * 120;
		set((state) => ({ totalAmount: totalAmount }));
	},
}));
