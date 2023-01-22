import type { Meta, StoryObj } from '@storybook/svelte'
import EyeDropperSvelte from '../../../lib/24/outline/eye-dropper.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: EyeDropperSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<EyeDropperSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EyeDropper: Story = {}
