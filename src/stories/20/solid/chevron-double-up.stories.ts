import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronDoubleUp as ChevronDoubleUpSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ChevronDoubleUpSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChevronDoubleUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleUp: Story = {}
