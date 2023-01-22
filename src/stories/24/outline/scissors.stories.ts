import type { Meta, StoryObj } from '@storybook/svelte'
import ScissorsSvelte from '../../../lib/24/outline/scissors.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ScissorsSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ScissorsSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Scissors: Story = {}
