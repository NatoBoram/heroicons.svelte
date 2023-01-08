import type { Meta, StoryObj } from '@storybook/svelte'
import { BarsArrowDown as BarsArrowDownSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: BarsArrowDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BarsArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BarsArrowDown: Story = {}
