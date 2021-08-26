import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TextInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	label: string;
	name: string;
	type: string;
}