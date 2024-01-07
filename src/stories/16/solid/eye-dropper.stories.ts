import type { Meta, StoryObj } from '@storybook/svelte'
import EyeDropperSvelte from '../../../lib/16/solid/eye-dropper.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: EyeDropperSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<EyeDropperSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EyeDropper: Story = {}
