import type { Meta, StoryObj } from '@storybook/svelte'
import { ComputerDesktop as ComputerDesktopSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ComputerDesktopSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ComputerDesktopSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ComputerDesktop: Story = {}
