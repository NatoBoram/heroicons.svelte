import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronLeft as ChevronLeftSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ChevronLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronLeft: Story = {}
