import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUpSvelte from '../../../lib/16/solid/arrow-up.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowUpSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUp: Story = {}
