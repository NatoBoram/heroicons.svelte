import type { Meta, StoryObj } from '@storybook/svelte'
import { BookOpen as BookOpenSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: BookOpenSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BookOpenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BookOpen: Story = {}
