import type { Meta, StoryObj } from '@storybook/svelte'
import BarsArrowDownSvelte from '../../../lib/24/outline/bars-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: BarsArrowDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BarsArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BarsArrowDown: Story = {}
