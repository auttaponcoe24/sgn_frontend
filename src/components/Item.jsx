import React from "react";

export default function Item({ obj, index }) {
	// console.log("obj", obj);
	const x = () => {
		if (index === 0) {
			return `w-[90%] bg-red-500`;
		} else if (index === 1) {
			return `w-[85%] bg-orange-500`;
		} else if (index === 2) {
			return `w-[80%] bg-amber-500`;
		} else if (index === 3) {
			return `w-[70%] bg-yellow-500`;
		} else if (index === 4) {
			return `w-[60%] bg-lime-600`;
		} else if (index === 5) {
			return `w-[40%] bg-green-600`;
		} else if (index === 6) {
			return `w-[28%] bg-purple-600`;
		} else if (index === 7) {
			return `w-[26%] bg-teal-600`;
		} else if (index === 8) {
			return `w-[22%] bg-cyan-600`;
		} else if (index === 9) {
			return `w-[20%] bg-indigo-600`;
		}
	};

	return (
		<div className="grid grid-cols-12 gap-2 items-center">
			<div className="col-span-2">{obj.Country_name}</div>
			<div className="col-span-10 flex h-[30px] gap-1">
				<div className={`rounded-lg ${x()}`}></div>
				<div className="self-center">
					{new Intl.NumberFormat().format(obj.Population)}
				</div>
			</div>
		</div>
	);
}
