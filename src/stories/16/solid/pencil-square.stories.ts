import type { Meta, StoryObj } from '@storybook/svelte'
import PencilSquareSvelte from '../../../lib/16/solid/pencil-square.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PencilSquareSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PencilSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PencilSquare: Story = {}
