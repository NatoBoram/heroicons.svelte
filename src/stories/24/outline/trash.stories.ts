import type { Meta, StoryObj } from '@storybook/svelte'
import TrashSvelte from '../../../lib/24/outline/trash.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: TrashSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<TrashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Trash: Story = {}
