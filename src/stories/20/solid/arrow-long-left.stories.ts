import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLongLeftSvelte from '../../../lib/20/solid/arrow-long-left.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowLongLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowLongLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLongLeft: Story = {}
