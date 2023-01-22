import type { Meta, StoryObj } from '@storybook/svelte'
import BackspaceSvelte from '../../../lib/24/outline/backspace.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: BackspaceSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BackspaceSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Backspace: Story = {}
