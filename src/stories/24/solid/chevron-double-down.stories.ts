import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronDoubleDown as ChevronDoubleDownSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ChevronDoubleDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronDoubleDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleDown: Story = {}
