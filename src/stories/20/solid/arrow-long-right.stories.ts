import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLongRightSvelte from '../../../lib/20/solid/arrow-long-right.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowLongRightSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowLongRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLongRight: Story = {}
