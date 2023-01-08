import type { Meta, StoryObj } from '@storybook/svelte'
import { ComputerDesktop as ComputerDesktopSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ComputerDesktopSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ComputerDesktopSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ComputerDesktop: Story = {}
