import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TextInputAdminProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	label: string;
	name: string;
	type: string;
}