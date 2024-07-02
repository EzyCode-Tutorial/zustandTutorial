import { create } from "zustand";

const bookStore = (set) => {
	return {
		numberOfBooks: 3,
		addBook: () => set((state) => ({ numberOfBooks: state.numberOfBooks + 1 })),
		sellBook: () =>
			set((state) => ({ numberOfBooks: state.numberOfBooks - 1 })),
	};
};

const useBookStore = create(bookStore);

export default useBookStore;

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
