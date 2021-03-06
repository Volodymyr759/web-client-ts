import { ReactNode } from "react";

export interface HtagProps {
	tag: 'h1' | 'h2' | 'h3' | 'h5';
	children: ReactNode;
}