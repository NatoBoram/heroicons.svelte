import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronUpDownSvelte from '../../../lib/16/solid/chevron-up-down.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChevronUpDownSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChevronUpDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronUpDown: Story = {}
