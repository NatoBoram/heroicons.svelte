import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUturnLeftSvelte from '../../../lib/24/solid/arrow-uturn-left.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowUturnLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUturnLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnLeft: Story = {}
