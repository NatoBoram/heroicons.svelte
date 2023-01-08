import type { Meta, StoryObj } from '@storybook/svelte'
import { BarsArrowUp as BarsArrowUpSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: BarsArrowUpSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BarsArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BarsArrowUp: Story = {}
