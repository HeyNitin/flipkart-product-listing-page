import { useReducer } from "react";
import { ProductCard } from "../components/productCard";
import { Sidebar } from "../components/sidebar";
import { productsData } from "../productsData";

const brandReducer = (initialValue, product) =>
	Object.keys(initialValue).includes(product.companyName)
		? initialValue
		: { ...initialValue, [product.companyName]: false };

const initialValue = {
	HighToLow: false,
	LowToHigh: false,
	XS: false,
	S: false,
	M: false,
	L: false,
	XL: false,
	XXL: false,
	allProducts: productsData,
	Brands: productsData.reduce(brandReducer, {}),
};

const productReducer = (state, action) => {
	switch (action.type) {
		case "HighToLow":
			return {
				...state,
				HighToLow: true,
				LowToHigh: false,
				allProducts: state.allProducts.sort(
					(a, b) => b.discountedPrice - a.discountedPrice
				),
			};
		case "LowToHigh":
			return {
				...state,
				HighToLow: false,
				LowToHigh: true,
				allProducts: state.allProducts.sort(
					(a, b) => a.discountedPrice - b.discountedPrice
				),
			};
		case "XS":
			return { ...state, XS: action.payload };
		case "S":
			return { ...state, S: action.payload };
		case "M":
			return { ...state, M: action.payload };
		case "L":
			return { ...state, L: action.payload };
		case "XL":
			return { ...state, XL: action.payload };
		case "XXL":
			return { ...state, XXL: action.payload };
		case "Brands":
			return {
				...state,
				Brands: {
					...state.Brands,
					[action.payload.name]: action.payload.checked,
				},
			};
		case "CLEAR":
			return {
				...initialValue,
				allProducts:
					state.HighToLow || state.LowToHigh
						? state.allProducts.sort(() => Math.random() - 0.5)
						: state.allProducts,
			};

		default:
			return state;
	}
};

const Products = () => {
	const [state, dispatch] = useReducer(productReducer, initialValue);

	const finalProductReducer = (product) => {
		const sizes = {
			XS: state.XS,
			S: state.S,
			M: state.M,
			L: state.L,
			XL: state.XL,
			XXL: state.XXL,
		};

		const brands = {
			...state.Brands,
		};

		let sizeCheckboxApplied = false;
		let brandsCheckboxApplied = false;

		for (let obj in sizes) {
			if (sizes[obj]) {
				sizeCheckboxApplied = true;
				break;
			}
		}
		for (let obj in brands) {
			if (brands[obj]) {
				brandsCheckboxApplied = true;
				break;
			}
		}

		if (sizeCheckboxApplied && brandsCheckboxApplied) {
			for (let size of product.availableSizes) {
				if (sizes[size] && brands[product.companyName]) {
					return true;
				}
			}
			return false;
		} else if (sizeCheckboxApplied) {
			for (let size of product.availableSizes) {
				if (sizes[size]) {
					return true;
				}
			}
			return false;
		} else if (brandsCheckboxApplied && brands[product.companyName]) {
			return true;
		} else if (!brandsCheckboxApplied && !sizeCheckboxApplied) {
			return true;
		} else {
			return false;
		}
	};

	const filteredProducts = state.allProducts.filter(finalProductReducer);

	return (
		<div>
			<Sidebar state={state} dispatch={dispatch} />
			{filteredProducts.map((item) => (
				<ProductCard key={item.key} product={item} />
			))}
		</div>
	);
};

export { Products };
