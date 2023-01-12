import type { Meta, StoryObj } from '@storybook/svelte'
import { Trash as TrashSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: TrashSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<TrashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Trash: Story = {}
