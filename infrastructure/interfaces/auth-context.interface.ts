export interface IAuthContext {
	access_token: string;
	expires_in: number;
	token_type: string;
	refresh_token: string;
	email: string;
	roles: number[];
	userId: string;
	logOut: () => void;
}