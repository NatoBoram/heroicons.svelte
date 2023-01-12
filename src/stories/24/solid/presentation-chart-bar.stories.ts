import type { Meta, StoryObj } from '@storybook/svelte'
import { PresentationChartBar as PresentationChartBarSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: PresentationChartBarSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PresentationChartBarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PresentationChartBar: Story = {}
