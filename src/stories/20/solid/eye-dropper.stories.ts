import type { Meta, StoryObj } from '@storybook/svelte'
import EyeDropperSvelte from '../../../lib/20/solid/eye-dropper.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: EyeDropperSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<EyeDropperSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EyeDropper: Story = {}
