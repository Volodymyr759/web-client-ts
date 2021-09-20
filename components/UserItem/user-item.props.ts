import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IUser } from '../../infrastructure/interfaces/user.interface';

export interface UserItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
	user: IUser;
}