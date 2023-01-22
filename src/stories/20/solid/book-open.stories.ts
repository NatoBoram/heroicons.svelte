import type { Meta, StoryObj } from '@storybook/svelte'
import BookOpenSvelte from '../../../lib/20/solid/book-open.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: BookOpenSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BookOpenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BookOpen: Story = {}
