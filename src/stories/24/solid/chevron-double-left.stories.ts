import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronDoubleLeft as ChevronDoubleLeftSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ChevronDoubleLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronDoubleLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleLeft: Story = {}
