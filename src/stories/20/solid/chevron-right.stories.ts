import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronRight as ChevronRightSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ChevronRightSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChevronRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronRight: Story = {}
