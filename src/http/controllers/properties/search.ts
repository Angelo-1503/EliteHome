import type { FastifyReply, FastifyRequest } from 'fastify';
import { PropertiesRepository } from '@/database/repositories/properties';
import { SearchPropertiesUseCase } from '@/use-cases/search-properties';

export async function search(_: FastifyRequest, reply: FastifyReply) {
	const repository = new PropertiesRepository();
	const useCase = new SearchPropertiesUseCase(repository);

	const response = await useCase.execute();

	return reply.status(200).send(response);
}
