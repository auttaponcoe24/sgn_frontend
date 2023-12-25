import React from "react";
import Item from "./Item";

export default function List({ data, index }) {
	// console.log("data=>", data);

	return (
		<>
			<Item obj={data} index={index} />
		</>
	);
}
