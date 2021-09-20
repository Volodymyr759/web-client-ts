import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IUser } from '../../infrastructure/interfaces/user.interface';

export interface UserListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	users: IUser[];
	sortByEmail: () => void;
}