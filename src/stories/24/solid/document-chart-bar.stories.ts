import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentChartBarSvelte from '../../../lib/24/solid/document-chart-bar.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: DocumentChartBarSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentChartBarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentChartBar: Story = {}
