import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronRightSvelte from '../../../lib/16/solid/chevron-right.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChevronRightSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChevronRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronRight: Story = {}
