import type { Meta, StoryObj } from '@storybook/svelte'
import ViewfinderCircleSvelte from '../../../lib/16/solid/viewfinder-circle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ViewfinderCircleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ViewfinderCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ViewfinderCircle: Story = {}
