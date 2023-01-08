import type { Meta, StoryObj } from '@storybook/svelte'
import { BookOpen as BookOpenSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: BookOpenSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BookOpenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BookOpen: Story = {}
