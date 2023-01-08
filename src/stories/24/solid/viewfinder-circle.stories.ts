import type { Meta, StoryObj } from '@storybook/svelte'
import { ViewfinderCircle as ViewfinderCircleSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ViewfinderCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ViewfinderCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ViewfinderCircle: Story = {}
