import type { Meta, StoryObj } from '@storybook/svelte'
import { Window as WindowSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: WindowSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<WindowSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Window: Story = {}
