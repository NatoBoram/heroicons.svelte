import type { Meta, StoryObj } from '@storybook/svelte'
import PencilSvelte from '../../../lib/24/solid/pencil.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: PencilSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PencilSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Pencil: Story = {}
