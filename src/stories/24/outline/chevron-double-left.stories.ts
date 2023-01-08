import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronDoubleLeft as ChevronDoubleLeftSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ChevronDoubleLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronDoubleLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleLeft: Story = {}
