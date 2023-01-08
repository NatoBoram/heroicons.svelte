import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronRight as ChevronRightSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ChevronRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronRight: Story = {}
