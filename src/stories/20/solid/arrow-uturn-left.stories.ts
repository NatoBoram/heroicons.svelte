import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUturnLeft as ArrowUturnLeftSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowUturnLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUturnLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnLeft: Story = {}
