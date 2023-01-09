import type { Meta, StoryObj } from '@storybook/svelte'
import { PencilSquare as PencilSquareSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: PencilSquareSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PencilSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PencilSquare: Story = {}