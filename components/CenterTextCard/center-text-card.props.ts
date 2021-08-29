import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CenterTextCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	htagText: string;
	children: ReactNode;
}