import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TitleCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	htagText: string;
	htagSize: 'h1' | 'h2';
	buttonText: string;
	buttonLink: string;
	objdata: string;
	children: ReactNode;
}