import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowDownTraySvelte from '../../../lib/16/solid/arrow-down-tray.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowDownTraySvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowDownTraySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownTray: Story = {}
