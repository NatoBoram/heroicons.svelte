import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUpTraySvelte from '../../../lib/20/solid/arrow-up-tray.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowUpTraySvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUpTraySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpTray: Story = {}
