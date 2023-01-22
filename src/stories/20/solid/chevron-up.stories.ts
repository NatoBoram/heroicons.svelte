import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronUpSvelte from '../../../lib/20/solid/chevron-up.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ChevronUpSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChevronUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronUp: Story = {}
