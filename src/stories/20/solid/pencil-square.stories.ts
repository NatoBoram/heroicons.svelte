import type { Meta, StoryObj } from '@storybook/svelte'
import PencilSquareSvelte from '../../../lib/20/solid/pencil-square.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: PencilSquareSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PencilSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PencilSquare: Story = {}
