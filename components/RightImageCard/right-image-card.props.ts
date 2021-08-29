import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface RightImageCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	htagText: string;
	isButtonNeeded?: boolean;
	buttonText?: string;
	buttonLink: string;
	objdata: string;
	children: ReactNode;
}