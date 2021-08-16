import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface RightSideCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	htagText: string;
	imgsrc: string;
	children?: ReactNode;
}