import React, { useState } from "react";

export default function Year({ year = "1950", onchange }) {
	return (
		<div className="flex flex-col gap-1">
			<input
				type="radio"
				name="year"
				onChange={onchange}
				className="cursor-pointer"
			/>
			<label>{year}</label>
		</div>
	);
}
