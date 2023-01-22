import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUturnLeftSvelte from '../../../lib/20/solid/arrow-uturn-left.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowUturnLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUturnLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnLeft: Story = {}
