import type { Meta, StoryObj } from '@storybook/svelte'
import { PresentationChartLine as PresentationChartLineSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: PresentationChartLineSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PresentationChartLineSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PresentationChartLine: Story = {}
