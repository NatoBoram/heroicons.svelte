import type { Meta, StoryObj } from '@storybook/svelte'
import BookOpenSvelte from '../../../lib/24/outline/book-open.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: BookOpenSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BookOpenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BookOpen: Story = {}
