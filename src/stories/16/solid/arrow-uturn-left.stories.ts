import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUturnLeftSvelte from '../../../lib/16/solid/arrow-uturn-left.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowUturnLeftSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowUturnLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnLeft: Story = {}
