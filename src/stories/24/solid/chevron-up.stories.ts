import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronUp as ChevronUpSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ChevronUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronUp: Story = {}
