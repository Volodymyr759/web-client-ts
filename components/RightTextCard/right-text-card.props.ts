import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface RightTextCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	htagText: string;
	objdata: string;
	children: ReactNode;
}