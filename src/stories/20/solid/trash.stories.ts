import type { Meta, StoryObj } from '@storybook/svelte'
import { Trash as TrashSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: TrashSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<TrashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Trash: Story = {}
