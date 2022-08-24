const Sidebar = ({ state, dispatch }) => {
	const { HighToLow, LowToHigh, XS, S, M, L, XL, XXL, Brands } = state;

	return (
		<aside>
			<div>
				<span>Filters</span>
				<button onClick={() => dispatch({ type: "CLEAR" })}>
					Clear filters
				</button>
			</div>
			<div>
				<div>Price</div>
				<div>
					<input
						onChange={() => dispatch({ type: "HighToLow" })}
						type={"radio"}
						id="HTL"
						name="price"
						checked={HighToLow}
					/>
					<label htmlFor="HTL">High To Low</label>
				</div>
				<div>
					<input
						onChange={() => dispatch({ type: "LowToHigh" })}
						type={"radio"}
						id="LTH"
						name="price"
						checked={LowToHigh}
					/>
					<label htmlFor="LTH">Low To High</label>
				</div>
			</div>
			<div>
				<div>Sizes</div>
				<div>
					<input
						onChange={(e) =>
							dispatch({ type: "XS", payload: e.target.checked })
						}
						type={"checkbox"}
						id="XS"
						checked={XS}
					/>
					<label htmlFor="XS">XS</label>
				</div>
				<div>
					<input
						onChange={(e) => dispatch({ type: "S", payload: e.target.checked })}
						type={"checkbox"}
						id="S"
						checked={S}
					/>
					<label htmlFor="S">S</label>
				</div>
				<div>
					<input
						onChange={(e) => dispatch({ type: "M", payload: e.target.checked })}
						type={"checkbox"}
						id="M"
						checked={M}
					/>
					<label htmlFor="M">M</label>
				</div>
				<div>
					<input
						onChange={(e) => dispatch({ type: "L", payload: e.target.checked })}
						type={"checkbox"}
						id="L"
						checked={L}
					/>
					<label htmlFor="L">L</label>
				</div>
				<div>
					<input
						onChange={(e) =>
							dispatch({ type: "XL", payload: e.target.checked })
						}
						type={"checkbox"}
						id="XL"
						checked={XL}
					/>
					<label htmlFor="XL">XL</label>
				</div>
				<div>
					<input
						onChange={(e) =>
							dispatch({ type: "XXL", payload: e.target.checked })
						}
						type={"checkbox"}
						id="XXL"
						checked={XXL}
					/>
					<label htmlFor="XXL">XXL</label>
				</div>
			</div>
			<div>
				<div>Brands</div>
				{Object.keys(Brands).map((item, index) => (
					<div key={index}>
						<input
							onChange={(e) =>
								dispatch({
									type: "Brands",
									payload: { name: item, checked: e.target.checked },
								})
							}
							type={"checkbox"}
							id={item}
							checked={Brands[item]}
						/>
						<label htmlFor={item}>{item}</label>
					</div>
				))}
			</div>
			<div></div>
		</aside>
	);
};

export { Sidebar };
