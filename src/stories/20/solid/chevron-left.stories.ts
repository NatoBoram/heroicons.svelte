import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronLeftSvelte from '../../../lib/20/solid/chevron-left.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ChevronLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChevronLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronLeft: Story = {}
