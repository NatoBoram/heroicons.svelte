import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUturnRightSvelte from '../../../lib/20/solid/arrow-uturn-right.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowUturnRightSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUturnRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUturnRight: Story = {}
