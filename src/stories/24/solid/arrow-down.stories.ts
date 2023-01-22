import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowDownSvelte from '../../../lib/24/solid/arrow-down.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDown: Story = {}
