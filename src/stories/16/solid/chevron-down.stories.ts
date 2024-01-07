import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronDownSvelte from '../../../lib/16/solid/chevron-down.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChevronDownSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChevronDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDown: Story = {}
