import type { Meta, StoryObj } from '@storybook/svelte'
import { Window as WindowSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: WindowSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<WindowSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Window: Story = {}
