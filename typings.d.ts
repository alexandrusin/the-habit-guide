export interface Habit extends HabitPreview {
	_id: string
	_createdAt: string
	_updatedAt: string
	_rev: string
	_type: 'habit'
	body: [object]
}

export type HabitPreview = {
	title: string
	slug: {
		current: string
	}
	description: string
	difficulty: string
	categories: Category[]
	cat: Array
}

export interface Category {
	_id: string
	_rev: string
	_type: string
	title: string
	description: string
	habit: {
		_ref: string
		_type: string
	}
}
