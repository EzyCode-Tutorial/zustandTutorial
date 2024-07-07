"use client";

import { useProducts } from "../_store/products";

function page() {
	const { numberOfMobiles, numberOfLaptops, addMobile, addLaptop } =
		useProducts();
	return (
		<div className='max-w-2xl mx-auto flex flex-col justify-center items-center min-h-screen'>
			<div>Number of Mobile : {numberOfMobiles}</div>
			<div>Number of Laptops : {numberOfLaptops}</div>
			<div>
				<button onClick={addMobile}>Add Mobile</button>
				<button onClick={addLaptop}>Add Laptop</button>
			</div>
		</div>
	);
}

export default page;
