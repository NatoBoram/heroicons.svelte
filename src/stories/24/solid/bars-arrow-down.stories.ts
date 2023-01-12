import type { Meta, StoryObj } from '@storybook/svelte'
import { BarsArrowDown as BarsArrowDownSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: BarsArrowDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BarsArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BarsArrowDown: Story = {}
