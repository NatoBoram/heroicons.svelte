import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronDoubleDown as ChevronDoubleDownSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ChevronDoubleDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronDoubleDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleDown: Story = {}
