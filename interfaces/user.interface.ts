import { Roles } from "../infrastructure/roles.enum";

export interface IUser {
	_id?: string;
	email: string;
	createdAt?: Date;
	updatedAt?: Date;
	roles: Roles[];
}
