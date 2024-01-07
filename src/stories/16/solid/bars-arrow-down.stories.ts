import type { Meta, StoryObj } from '@storybook/svelte'
import BarsArrowDownSvelte from '../../../lib/16/solid/bars-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BarsArrowDownSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BarsArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BarsArrowDown: Story = {}
