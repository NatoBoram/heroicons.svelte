import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUturnLeft as ArrowUturnLeftSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowUturnLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUturnLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnLeft: Story = {}
