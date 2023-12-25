import { Slider } from "@material-tailwind/react";
import axios from "./config/axios";
import { useEffect, useState } from "react";
import List from "./components/List";
import Year from "./components/Year";

function App() {
	const [data, setData] = useState([]);
	const [select, setSelect] = useState(1950);

	useEffect(() => {
		const fatchPopulation = async () => {
			try {
				const res = await axios.get(`/population/`);
				// console.log("res =>", res);
				setData(res.data.populationAll);
			} catch (err) {
				console.log(err);
			}
		};
		fatchPopulation();
	}, []);

	const year = (thisYear) => {
		let newData = data.filter((item) => item.Year === thisYear);
		let x = newData.filter((item, index) => {
			if (index < 10) return item;
		});

		return x;
	};

	// console.log("first=>", year(1952));
	const total = (thisYear) => {
		let newData = data.filter((item) => item.Year === thisYear);
		let x = newData.filter((item, index) => {
			if (index < 10) return item;
		});

		let t = x.reduce((acc, item) => {
			return (acc += item.Population);
		}, 0);

		return new Intl.NumberFormat().format(t);
		// console.log(new Intl.NumberFormat().format(number));
		// return t;
	};

	console.log("total=>", total(1952));

	return (
		<div className="h-screen flex flex-col p-4">
			<h1 className="text-3xl font-bold">
				Population growth per country, 1950 to 2021
			</h1>
			<h2>Click on the legend below to filter by continent</h2>
			<div>
				<ul className="flex gap-4">
					<li className="font-semibold">Region</li>
					<li>Asia</li>
					<li>Europe</li>
					<li>Africa</li>
					<li>Oceania</li>
					<li>Americas</li>
				</ul>
			</div>

			<div className="relative my-4">
				{year(select).map((item, index) => (
					<div key={index} className="mb-4">
						<List data={item} index={index} />
						{/* <hr className="mt-2 mx-[5%] border-[2px]" /> */}
					</div>
				))}
				<div className="absolute bottom-24 right-44 z-10">
					<div className="text-5xl text-gray-700 font-semibold text-right">
						{select}
					</div>
					<div className="text-2xl text-gray-700">Total: {total(select)}</div>
				</div>
			</div>

			<div className="flex gap-4 items-center justify-center">
				<Year year={"1950"} onchange={() => setSelect(1950)} />
				<Year year={"1955"} onchange={() => setSelect(1955)} />
				<Year year={"1960"} onchange={() => setSelect(1960)} />
				<Year year={"1965"} onchange={() => setSelect(1965)} />
				<Year year={"1970"} onchange={() => setSelect(1970)} />
				<Year year={"1975"} onchange={() => setSelect(1975)} />
				<Year year={"1980"} onchange={() => setSelect(1980)} />
				<Year year={"1985"} onchange={() => setSelect(1985)} />
				<Year year={"1990"} onchange={() => setSelect(1990)} />
				<Year year={"1995"} onchange={() => setSelect(1995)} />
				<Year year={"2000"} onchange={() => setSelect(2000)} />
				<Year year={"2005"} onchange={() => setSelect(2005)} />
				<Year year={"2010"} onchange={() => setSelect(2010)} />
				<Year year={"2015"} onchange={() => setSelect(2015)} />
				<Year year={"2020"} onchange={() => setSelect(2020)} />
			</div>
		</div>
	);
}

export default App;
