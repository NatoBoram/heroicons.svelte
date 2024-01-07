import type { Meta, StoryObj } from '@storybook/svelte'
import WindowSvelte from '../../../lib/16/solid/window.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: WindowSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<WindowSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Window: Story = {}
