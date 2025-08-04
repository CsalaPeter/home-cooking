export interface Recipe {
	id: number
	name: string
	image: string
	tags: string[]
	description: string
	instructions: string[]
	ingredients: {
		id: string
		amount: number
		name: string
		measurement: string
	}[]
}
