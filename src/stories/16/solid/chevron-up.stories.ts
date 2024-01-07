import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronUpSvelte from '../../../lib/16/solid/chevron-up.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChevronUpSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChevronUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronUp: Story = {}
