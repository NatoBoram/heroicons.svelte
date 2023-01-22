import type { Meta, StoryObj } from '@storybook/svelte'
import BarsArrowUpSvelte from '../../../lib/24/solid/bars-arrow-up.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: BarsArrowUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BarsArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BarsArrowUp: Story = {}
