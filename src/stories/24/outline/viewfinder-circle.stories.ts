import type { Meta, StoryObj } from '@storybook/svelte'
import ViewfinderCircleSvelte from '../../../lib/24/outline/viewfinder-circle.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ViewfinderCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ViewfinderCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ViewfinderCircle: Story = {}
