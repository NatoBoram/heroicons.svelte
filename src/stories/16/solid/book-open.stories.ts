import type { Meta, StoryObj } from '@storybook/svelte'
import BookOpenSvelte from '../../../lib/16/solid/book-open.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BookOpenSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BookOpenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BookOpen: Story = {}
