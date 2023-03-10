import type { Meta, StoryObj } from '@storybook/svelte'
import ViewColumnsSvelte from '../../../lib/20/solid/view-columns.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ViewColumnsSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ViewColumnsSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ViewColumns: Story = {}
