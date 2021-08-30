import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IMessage } from '../../interfaces/message.interface';

export interface MessageListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	messages: IMessage[];
	sortByName: () => void;
}