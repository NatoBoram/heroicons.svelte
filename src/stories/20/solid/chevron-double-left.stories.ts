import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronDoubleLeft as ChevronDoubleLeftSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ChevronDoubleLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChevronDoubleLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleLeft: Story = {}
