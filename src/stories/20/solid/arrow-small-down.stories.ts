import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowSmallDownSvelte from '../../../lib/20/solid/arrow-small-down.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowSmallDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowSmallDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowSmallDown: Story = {}
