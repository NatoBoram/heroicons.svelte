import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronUp as ChevronUpSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ChevronUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronUp: Story = {}
