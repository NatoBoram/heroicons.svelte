import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUp as ArrowUpSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ArrowUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUp: Story = {}
