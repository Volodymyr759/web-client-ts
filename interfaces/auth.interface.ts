export interface IUser {
	email: string;
	roles: string[];
}

export interface IAuthContext {
	access_token: string;
	expires_in: number;
	token_type: string;
	refresh_token: string;
	email: string | null;
	roles: number[];
	logOut: () => void;
}