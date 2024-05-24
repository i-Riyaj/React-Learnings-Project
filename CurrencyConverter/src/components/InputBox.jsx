import { useId } from "react";

function InputBox({
	label,
	amount,
	onAmountChnage,
	amountDisabled,
	onCurrencyChange,
	currencyOptions = [],
	selectCurrency = "usd",
}) {
	const amountID = useId();
	return (
		<div className="bg-white p-5 rounded-lg text-xl flex sm:flex-row flex-col sm:gap-5 gap-3">
			<div className="flex flex-col sm:gap-5 gap-2">
				<label
					htmlFor={amountID}
					className="text-gray-500"
				>
					{label}
				</label>
				<input
					type="number"
					name="amount"
					id={amountID}
					className="focus:outline-none sm:text-start text-end"
                    placeholder="amount"
					value={amount}
					min={0}
					onChange={(e) =>
						onAmountChnage && onAmountChnage(Number(e.target.value))
					}
					disabled={amountDisabled}
				/>
			</div>
			<div className="flex flex-col gap-5 sm:items-end items-start">
				<p
					htmlFor=""
					className="text-gray-500"
				>
					Currency Type
				</p>
				<select
					name="chooseCurrency"
					className="focus:outline-none bg-gray-200 rounded-lg p-1"
					value={selectCurrency}
					onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
				>
					{currencyOptions.map((currency) => (
						<option
							key={currency}
							value={currency}
						>
							{currency}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default InputBox;
