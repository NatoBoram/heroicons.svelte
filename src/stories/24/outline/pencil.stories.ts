import type { Meta, StoryObj } from '@storybook/svelte'
import PencilSvelte from '../../../lib/24/outline/pencil.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: PencilSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PencilSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Pencil: Story = {}
