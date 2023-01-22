import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronUpDownSvelte from '../../../lib/24/solid/chevron-up-down.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ChevronUpDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronUpDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronUpDown: Story = {}
