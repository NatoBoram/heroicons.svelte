import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentDuplicateSvelte from '../../../lib/24/outline/document-duplicate.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: DocumentDuplicateSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentDuplicateSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentDuplicate: Story = {}
