import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowDownLeftSvelte from '../../../lib/20/solid/arrow-down-left.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowDownLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowDownLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownLeft: Story = {}
