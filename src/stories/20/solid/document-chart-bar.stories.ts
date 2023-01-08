import type { Meta, StoryObj } from '@storybook/svelte'
import { DocumentChartBar as DocumentChartBarSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: DocumentChartBarSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DocumentChartBarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentChartBar: Story = {}
