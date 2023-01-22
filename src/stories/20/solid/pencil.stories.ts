import type { Meta, StoryObj } from '@storybook/svelte'
import PencilSvelte from '../../../lib/20/solid/pencil.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: PencilSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PencilSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Pencil: Story = {}
