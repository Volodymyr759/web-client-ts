import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface FormLabelProps extends DetailedHTMLProps<HTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
	children: ReactNode;
}