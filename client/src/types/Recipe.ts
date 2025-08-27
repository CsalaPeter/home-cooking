export interface RecipeShort {
	id: number
	name: string
	card_image: string
	tags: {
		id: string
		name: string
		icon: string
	}[]
}

export interface Recipe {
	id: number
	name: string
	image: string
	tags: {
		id: string
		name: string
		icon: string
	}[]
	instructions: string[]
	ingredients: {
		id: string
		amount: number
		name: string
		measurement: string
	}[]
}
