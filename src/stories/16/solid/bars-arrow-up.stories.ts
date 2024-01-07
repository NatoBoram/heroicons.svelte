import type { Meta, StoryObj } from '@storybook/svelte'
import BarsArrowUpSvelte from '../../../lib/16/solid/bars-arrow-up.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BarsArrowUpSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BarsArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BarsArrowUp: Story = {}
