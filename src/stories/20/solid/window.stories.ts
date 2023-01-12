import type { Meta, StoryObj } from '@storybook/svelte'
import { Window as WindowSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: WindowSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<WindowSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Window: Story = {}
