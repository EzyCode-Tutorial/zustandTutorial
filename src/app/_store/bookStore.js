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
