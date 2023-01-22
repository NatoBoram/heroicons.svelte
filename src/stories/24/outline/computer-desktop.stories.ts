import type { Meta, StoryObj } from '@storybook/svelte'
import ComputerDesktopSvelte from '../../../lib/24/outline/computer-desktop.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ComputerDesktopSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ComputerDesktopSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ComputerDesktop: Story = {}
