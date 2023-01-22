import type { Meta, StoryObj } from '@storybook/svelte'
import ViewColumnsSvelte from '../../../lib/24/solid/view-columns.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ViewColumnsSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ViewColumnsSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ViewColumns: Story = {}
