import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowDownSvelte from '../../../lib/16/solid/arrow-down.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowDownSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDown: Story = {}
