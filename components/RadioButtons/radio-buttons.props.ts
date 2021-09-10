import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface RadioButtonsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	label: string;
	name: string;
	options: { 'key': string, 'value': string }[];
}