import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface BubbleBoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	appearance: 'left-top' | 'right-top' | 'right-bottom' | 'left-bottom';
	headerText: string;
	spanText?: string;
	children?: ReactNode;
}