import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronDownSvelte from '../../../lib/24/solid/chevron-down.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ChevronDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDown: Story = {}
