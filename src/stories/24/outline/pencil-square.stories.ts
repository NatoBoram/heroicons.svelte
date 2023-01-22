import type { Meta, StoryObj } from '@storybook/svelte'
import PencilSquareSvelte from '../../../lib/24/outline/pencil-square.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: PencilSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PencilSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PencilSquare: Story = {}
