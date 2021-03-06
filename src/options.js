import { __ } from '@wordpress/i18n'

export const filterTypes = [
	{ value: 'is', label: __('Is equal to', 'postie') },
	{ value: 'not', label: __('Is not equal to', 'postie') },
	{ value: 'lt', label: __('Is less than', 'postie') },
	{ value: 'gt', label: __('Is greater than', 'postie') },
	{ value: 'lte', label: __('Is less than or equal to', 'postie') },
	{ value: 'gte', label: __('Is greater than or equal to', 'postie') }
]

export const orderByOptions = [
	{ value: 'ID', label: __('ID', 'postie') },
	{ value: 'date', label: __('Publish Date', 'postie') },
	{ value: 'modified', label: __('Modified Date', 'postie') },
	{ value: 'title', label: __('Title', 'postie') },
	{ value: 'name', label: __('Slug', 'postie') },
	{ value: 'menu_order', label: __('Menu Order', 'postie') },
	{ value: 'rand', label: __('Random', 'postie') },
	{ value: 'meta', label: __('Custom Field', 'postie') },
]

export const orderOptions = [
	{ value: 'ASC', label: __('Ascending', 'postie') },
	{ value: 'DESC', label: __('Descending', 'postie') }
]
