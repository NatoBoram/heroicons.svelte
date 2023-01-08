import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowDown as ArrowDownSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ArrowDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDown: Story = {}
