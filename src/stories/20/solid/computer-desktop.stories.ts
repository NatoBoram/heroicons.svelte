import type { Meta, StoryObj } from '@storybook/svelte'
import ComputerDesktopSvelte from '../../../lib/20/solid/computer-desktop.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ComputerDesktopSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ComputerDesktopSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ComputerDesktop: Story = {}
