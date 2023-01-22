import type { Meta, StoryObj } from '@storybook/svelte'
import WindowSvelte from '../../../lib/24/outline/window.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: WindowSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<WindowSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Window: Story = {}
