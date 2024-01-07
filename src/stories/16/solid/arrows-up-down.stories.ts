import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowsUpDownSvelte from '../../../lib/16/solid/arrows-up-down.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowsUpDownSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowsUpDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsUpDown: Story = {}
