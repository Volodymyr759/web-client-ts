import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IMessage } from '../../interfaces/message.interface';

export interface MessageItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
	message: IMessage;
}