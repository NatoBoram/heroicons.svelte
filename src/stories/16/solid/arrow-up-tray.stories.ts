import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUpTraySvelte from '../../../lib/16/solid/arrow-up-tray.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowUpTraySvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowUpTraySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpTray: Story = {}
