import type { Meta, StoryObj } from '@storybook/svelte'
import { PresentationChartBar as PresentationChartBarSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: PresentationChartBarSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PresentationChartBarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PresentationChartBar: Story = {}
