import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentDuplicateSvelte from '../../../lib/16/solid/document-duplicate.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: DocumentDuplicateSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<DocumentDuplicateSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentDuplicate: Story = {}
