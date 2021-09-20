import { Roles } from "../roles.enum";

export interface IUser {
	_id?: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
	roles: Roles[];
}
