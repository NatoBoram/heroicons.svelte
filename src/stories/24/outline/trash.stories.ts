import type { Meta, StoryObj } from '@storybook/svelte'
import { Trash as TrashSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: TrashSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<TrashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Trash: Story = {}
