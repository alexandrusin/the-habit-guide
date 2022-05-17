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
	tags: Tag[]
}

export interface Tag {
	_id: string
	_rev: string
	_type: string
	title: string
	slug: {
		current: string
	}
	description: string
	habit: {
		_ref: string
		_type: string
	}
}
