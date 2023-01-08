import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUp as ArrowUpSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowUpSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUp: Story = {}
