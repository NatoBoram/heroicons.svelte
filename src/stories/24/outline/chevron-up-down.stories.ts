import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronUpDown as ChevronUpDownSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ChevronUpDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronUpDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronUpDown: Story = {}
