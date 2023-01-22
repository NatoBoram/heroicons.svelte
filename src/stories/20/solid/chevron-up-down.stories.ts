import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronUpDownSvelte from '../../../lib/20/solid/chevron-up-down.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ChevronUpDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChevronUpDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronUpDown: Story = {}
