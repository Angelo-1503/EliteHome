import { knex } from '@/database';
import type { Visit } from '@/entities/visit';
import { VisitSchema } from '../schemas/visit';

export class VisitsRepository {
	async create(visit: Visit): Promise<Visit> {
		const [createdVisit] = await knex<VisitSchema>('visits')
			.insert({
				name: visit.name,
				phone: visit.phone,
				email: visit.email,
				status: visit.status,
				date: visit.date.toISOString(),
				property_id: visit.propertyId,
			})
			.returning('*');

		const visitEntity = new VisitSchema(createdVisit).toEntity();

		return visitEntity;
	}
}
