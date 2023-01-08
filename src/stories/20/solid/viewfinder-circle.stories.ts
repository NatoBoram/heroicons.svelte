import type { Meta, StoryObj } from '@storybook/svelte'
import { ViewfinderCircle as ViewfinderCircleSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ViewfinderCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ViewfinderCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ViewfinderCircle: Story = {}
