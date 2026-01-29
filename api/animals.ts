import api from './client';
import { Animal } from '@/types/Animal';

export const getAnimals = async (): Promise<Animal[]> => {
	const response = await api.get<Animal[]>('/animals');
	return response.data;
};

export const getAnimalById = async (id: number): Promise<Animal> => {
	const response = await api.get<Animal>(`/animals/${id}`);
	return response.data;
};
