import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLongLeftSvelte from '../../../lib/16/solid/arrow-long-left.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowLongLeftSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowLongLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLongLeft: Story = {}
