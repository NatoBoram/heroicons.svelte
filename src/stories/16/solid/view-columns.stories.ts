import type { Meta, StoryObj } from '@storybook/svelte'
import ViewColumnsSvelte from '../../../lib/16/solid/view-columns.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ViewColumnsSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ViewColumnsSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ViewColumns: Story = {}
