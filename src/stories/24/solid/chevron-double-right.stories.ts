import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronDoubleRight as ChevronDoubleRightSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ChevronDoubleRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronDoubleRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleRight: Story = {}
