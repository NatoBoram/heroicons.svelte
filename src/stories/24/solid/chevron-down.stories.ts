import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronDown as ChevronDownSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ChevronDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDown: Story = {}
