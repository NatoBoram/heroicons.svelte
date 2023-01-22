import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUpSvelte from '../../../lib/24/solid/arrow-up.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUp: Story = {}
