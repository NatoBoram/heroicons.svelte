import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentChartBarSvelte from '../../../lib/20/solid/document-chart-bar.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: DocumentChartBarSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DocumentChartBarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentChartBar: Story = {}
