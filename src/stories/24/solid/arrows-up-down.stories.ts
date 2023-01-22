import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowsUpDownSvelte from '../../../lib/24/solid/arrows-up-down.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowsUpDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowsUpDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsUpDown: Story = {}
