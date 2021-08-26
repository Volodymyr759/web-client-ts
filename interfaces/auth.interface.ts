export interface IUser {
	email: string;
	roles: string[];
}

export interface IAuthContext {
	token: string;
	user: IUser;
}