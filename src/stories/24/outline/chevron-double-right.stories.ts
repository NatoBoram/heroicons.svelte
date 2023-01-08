import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronDoubleRight as ChevronDoubleRightSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ChevronDoubleRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronDoubleRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleRight: Story = {}
