import type { Meta, StoryObj } from '@storybook/svelte'
import { BarsArrowUp as BarsArrowUpSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: BarsArrowUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BarsArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BarsArrowUp: Story = {}
