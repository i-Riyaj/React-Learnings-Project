import { useState } from "react";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";
import { InputBox } from "./components";

function App() {
	const [amount, setAmount] = useState(0);
	const [currencyFrom, setCurrencyFrom] = useState("usd");
	const [currencyTo, setCurrencyTo] = useState("inr");
	const [convertedAmount, setConvertedAmount] = useState(0);

	const currencyInfo = useCurrencyInfo(currencyFrom);

	const currencyOptions = Object.keys(currencyInfo);

	const swap = () => {

		setCurrencyFrom(currencyTo);
		setCurrencyTo(currencyFrom);

		setAmount(convertedAmount);
		setConvertedAmount(amount);
	};

	const convert = () => {
		setConvertedAmount(amount * currencyInfo[currencyTo]);
	};

	return (
		<div className="bg-[#414141] min-h-dvh flex justify-center items-center text-sm p-2">
			<form
				className="bg-gray-500 p-5 rounded-lg flex flex-col gap-4"
				onSubmit={(e) => {
					e.preventDefault();
					convert();
				}}
			>
				<div className="flex flex-col gap-2 w-fit rounded-lg relative">
					<InputBox
						label="From"
						amount={amount}
						onAmountChnage={(amount) => setAmount(amount)}
						amountDisabled={false}
						onCurrencyChange={(currency) => setCurrencyFrom(currency)}
						currencyOptions={currencyOptions}
						selectCurrency={currencyFrom}
					/>
					<InputBox
						label="To"
						amount={convertedAmount}
						amountDisabled
						onCurrencyChange={(currency) => setCurrencyTo(currency)}
						currencyOptions={currencyOptions}
						selectCurrency={currencyTo}
					/>
					<button
						type="button"
						className="bg-blue-600 w-fit px-3 py-2 rounded-md absolute sm:top-[105px] top-[185px] left-[100px] sm:left-[170px] text-white font-semibold border-white border-[3px]"
						onClick={swap}
					>
						SWAP
					</button>
				</div>
				<button
					type="submit"
					className="bg-blue-600 py-3 text-white font-semibold text-xl rounded-lg"
				>
					{`Convert ${currencyFrom.toUpperCase()} to ${currencyTo.toUpperCase()}`}
				</button>
			</form>
		</div>
	);
}

export default App;
