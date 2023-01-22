import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLongRightSvelte from '../../../lib/24/solid/arrow-long-right.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowLongRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowLongRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLongRight: Story = {}
