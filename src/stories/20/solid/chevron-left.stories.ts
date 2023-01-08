import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronLeft as ChevronLeftSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ChevronLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChevronLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronLeft: Story = {}
