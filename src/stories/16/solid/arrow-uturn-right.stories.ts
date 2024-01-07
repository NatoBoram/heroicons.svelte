import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUturnRightSvelte from '../../../lib/16/solid/arrow-uturn-right.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowUturnRightSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowUturnRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnRight: Story = {}
