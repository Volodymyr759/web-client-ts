import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IUser } from '../../interfaces/user.interface';

export interface UserListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	users: IUser[];
	sortByEmail: () => void;
}