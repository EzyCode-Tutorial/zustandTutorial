import { create } from "zustand";

const mobileSlice = (set) => ({
	numberOfMobiles: 10,
	addMobile: () =>
		set((state) => ({
			numberOfMobiles: state.numberOfMobiles + 1,
		})),
	removeMobile: () =>
		set((state) => ({
			numberOfMobiles: state.numberOfMobiles - 1,
		})),
});

const laptopSlice = (set, get) => ({
	numberOfLaptops: 20,
	addLaptop: () => {
		let amount = 20000 * get().numberOfLaptops;
		set((state) => ({
			numberOfLaptops: state.numberOfLaptops + 1,
		}));
	},
	removeLaptop: () =>
		set((state) => ({
			numberOfLaptops: state.numberOfLaptops - 1,
		})),
});

export const useProducts = create((...a) => ({
	...mobileSlice(...a),
	...laptopSlice(...a),
}));
