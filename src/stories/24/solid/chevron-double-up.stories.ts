import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronDoubleUp as ChevronDoubleUpSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ChevronDoubleUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronDoubleUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleUp: Story = {}
