export interface Recipe {
	id: number
	name: string
	image: string
	description: string
	ingredients: string[]
	instructions: string
	created_at: Date
	updated_at: Date
}
