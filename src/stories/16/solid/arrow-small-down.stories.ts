import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowSmallDownSvelte from '../../../lib/16/solid/arrow-small-down.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowSmallDownSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowSmallDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowSmallDown: Story = {}
