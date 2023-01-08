import type { Meta, StoryObj } from '@storybook/svelte'
import { Pencil as PencilSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: PencilSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PencilSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Pencil: Story = {}
