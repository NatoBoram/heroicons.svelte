import type { Meta, StoryObj } from '@storybook/svelte'
import BarsArrowDownSvelte from '../../../lib/20/solid/bars-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: BarsArrowDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BarsArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BarsArrowDown: Story = {}
