import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronLeftSvelte from '../../../lib/16/solid/chevron-left.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChevronLeftSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChevronLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronLeft: Story = {}
