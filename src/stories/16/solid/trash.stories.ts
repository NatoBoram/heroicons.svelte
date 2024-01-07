import type { Meta, StoryObj } from '@storybook/svelte'
import TrashSvelte from '../../../lib/16/solid/trash.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: TrashSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<TrashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Trash: Story = {}
