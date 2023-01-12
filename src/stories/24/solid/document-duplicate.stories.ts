import type { Meta, StoryObj } from '@storybook/svelte'
import { DocumentDuplicate as DocumentDuplicateSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: DocumentDuplicateSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentDuplicateSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentDuplicate: Story = {}
