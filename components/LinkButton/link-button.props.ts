import { ReactNode } from "react";

export interface LinkButtonProps {
	appearance: 'primary' | 'white';
	linkTo: string | undefined;
	children: ReactNode;
}