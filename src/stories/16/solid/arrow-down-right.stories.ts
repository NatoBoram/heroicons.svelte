import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowDownRightSvelte from '../../../lib/16/solid/arrow-down-right.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowDownRightSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowDownRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownRight: Story = {}
