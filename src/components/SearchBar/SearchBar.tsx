import {FormEvent} from "react";
import iconArrow from "../../assets/icon-arrow.svg";
import {Button, Form} from "./SearchBarStyle";

interface InputFormProps {
	//onSubmit: (event: FormEvent<Element>) => Promise<void>;
	onSubmit: (event: FormEvent<Element>) => void;
	onChange: (event: {target: HTMLInputElement}) => void;
	value: string;
}

export default function SearchBar({
	onSubmit: submitHandler,
	onChange: changeHandler,
	value,
}: InputFormProps) {
	return (
		<Form action="submit" onSubmit={submitHandler}>
			<input
				type="text"
				name="search"
				placeholder="Search for any IP address or domain"
				value={value}
				onChange={changeHandler}
			/>
			<Button type="submit">
				<img src={iconArrow} alt="submit form icon" />
			</Button>
		</Form>
	);
}
