import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowDownLeftSvelte from '../../../lib/16/solid/arrow-down-left.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowDownLeftSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowDownLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownLeft: Story = {}
