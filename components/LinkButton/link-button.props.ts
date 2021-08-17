import { ReactNode } from "react";
import { UrlObject } from "url";

export interface LinkButtonProps {
	appearance: 'primary' | 'white';
	linkTo: string | UrlObject;
	children: ReactNode;
}