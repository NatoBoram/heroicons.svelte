import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowDownTraySvelte from '../../../lib/24/outline/arrow-down-tray.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowDownTraySvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowDownTraySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownTray: Story = {}
