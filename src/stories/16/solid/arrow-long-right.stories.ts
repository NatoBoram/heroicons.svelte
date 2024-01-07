import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLongRightSvelte from '../../../lib/16/solid/arrow-long-right.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowLongRightSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowLongRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLongRight: Story = {}
