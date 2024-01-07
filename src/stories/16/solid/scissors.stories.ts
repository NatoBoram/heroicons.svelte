import type { Meta, StoryObj } from '@storybook/svelte'
import ScissorsSvelte from '../../../lib/16/solid/scissors.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ScissorsSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ScissorsSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Scissors: Story = {}
