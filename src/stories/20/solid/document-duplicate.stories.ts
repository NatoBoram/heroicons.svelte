import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentDuplicateSvelte from '../../../lib/20/solid/document-duplicate.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: DocumentDuplicateSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DocumentDuplicateSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentDuplicate: Story = {}
