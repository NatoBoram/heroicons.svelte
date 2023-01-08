import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUpTray as ArrowUpTraySvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ArrowUpTraySvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUpTraySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpTray: Story = {}
