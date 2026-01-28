import api from './client';

export interface Animal {
	id: number;
	type: string;
	name: string;
	imageURL?: string;
	gender: string;
	age?: number;
	size?: string;
	breed?: string;
	fostered?: boolean;
	description?: string;
	shelterId: number;
}
export const getAnimals = async (params?: {
	breed?: string;
	gender?: string;
	type?: string;
	size?: string;
}): Promise<Animal[]> => {
	const response = await api.get<Animal[]>('/animals');
	return response.data;
};

export const getAnimalById = async (id: number): Promise<Animal> => {
	const response = await api.get<Animal>(`/animals/${id}`);
	return response.data;
};
