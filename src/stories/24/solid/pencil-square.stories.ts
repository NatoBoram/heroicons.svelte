import type { Meta, StoryObj } from '@storybook/svelte'
import { PencilSquare as PencilSquareSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: PencilSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PencilSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PencilSquare: Story = {}
