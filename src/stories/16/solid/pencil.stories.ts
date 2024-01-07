import type { Meta, StoryObj } from '@storybook/svelte'
import PencilSvelte from '../../../lib/16/solid/pencil.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PencilSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PencilSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Pencil: Story = {}
