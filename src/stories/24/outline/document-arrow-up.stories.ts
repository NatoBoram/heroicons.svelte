import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentArrowUpSvelte from '../../../lib/24/outline/document-arrow-up.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: DocumentArrowUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentArrowUp: Story = {}
