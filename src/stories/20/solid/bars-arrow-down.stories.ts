import type { Meta, StoryObj } from '@storybook/svelte'
import { BarsArrowDown as BarsArrowDownSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: BarsArrowDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BarsArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BarsArrowDown: Story = {}
