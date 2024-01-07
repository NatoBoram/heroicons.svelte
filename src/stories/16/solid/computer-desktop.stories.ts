import type { Meta, StoryObj } from '@storybook/svelte'
import ComputerDesktopSvelte from '../../../lib/16/solid/computer-desktop.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ComputerDesktopSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ComputerDesktopSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ComputerDesktop: Story = {}
