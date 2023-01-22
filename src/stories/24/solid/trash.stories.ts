import type { Meta, StoryObj } from '@storybook/svelte'
import TrashSvelte from '../../../lib/24/solid/trash.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: TrashSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<TrashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Trash: Story = {}
