import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IconTextBoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	appearance: 'exotic' | 'rocket';
	headerText: string;
	children: ReactNode;
}