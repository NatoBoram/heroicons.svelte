import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUpTray as ArrowUpTraySvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowUpTraySvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUpTraySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpTray: Story = {}
