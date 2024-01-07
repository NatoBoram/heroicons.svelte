import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentChartBarSvelte from '../../../lib/16/solid/document-chart-bar.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: DocumentChartBarSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<DocumentChartBarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentChartBar: Story = {}
