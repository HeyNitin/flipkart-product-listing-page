const ProductCard = ({ product }) => {
	const {
		title,
		img,
		companyName,
		price,
		discountedPrice,
		availableSizes,
		key,
	} = product;
	return (
		<div key={key}>
			<img src={img} alt="product" />
			<p>{companyName}</p>
			<div>{title}</div>
			<div>
				{discountedPrice}
				<span>{price}</span>
			</div>
			<div>
				Size{":"}
				{availableSizes.map((size) => (
					<span>{size},</span>
				))}
			</div>
		</div>
	);
};

export { ProductCard };
