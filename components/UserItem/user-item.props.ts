import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IUser } from '../../interfaces/user.interface';

export interface UserItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
	user: IUser;
}