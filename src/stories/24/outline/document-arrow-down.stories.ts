import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentArrowDownSvelte from '../../../lib/24/outline/document-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: DocumentArrowDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentArrowDown: Story = {}
