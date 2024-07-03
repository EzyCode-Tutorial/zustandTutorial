import { create } from "zustand";
import { devtools } from "zustand/middleware";
const bookStore = (set) => {
	return {
		numberOfBooks: 3,
	};
};
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
