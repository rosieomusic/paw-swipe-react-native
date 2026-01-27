import api from './client';

export const login = async (username: string, password: string) => {
	const response = await api.post('/login', {
		username,
		password,
	});
	return response.data;
};

export interface RegisterRequest {
	username: string;
	password: string;
	confirmPassword: string;
	firstName: string;
	email: string;
	role: string;
	lastName?: string;
}
export const register = async (data: RegisterRequest) => {
	const response = await api.post('/register', data);
	return response.data;
};
