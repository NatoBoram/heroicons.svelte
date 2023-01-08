import type { Meta, StoryObj } from '@storybook/svelte'
import { Pencil as PencilSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: PencilSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PencilSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Pencil: Story = {}
