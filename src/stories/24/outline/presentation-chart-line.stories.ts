import type { Meta, StoryObj } from '@storybook/svelte'
import { PresentationChartLine as PresentationChartLineSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: PresentationChartLineSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PresentationChartLineSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PresentationChartLine: Story = {}
