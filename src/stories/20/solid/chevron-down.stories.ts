import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronDownSvelte from '../../../lib/20/solid/chevron-down.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ChevronDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChevronDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDown: Story = {}
