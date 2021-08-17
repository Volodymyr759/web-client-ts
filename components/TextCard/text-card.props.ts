import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TextCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	htagText?: string;
	htagSize?: 'h1' | 'h2';
	children: ReactNode;
}