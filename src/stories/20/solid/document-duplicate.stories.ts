import type { Meta, StoryObj } from '@storybook/svelte'
import { DocumentDuplicate as DocumentDuplicateSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: DocumentDuplicateSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DocumentDuplicateSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentDuplicate: Story = {}
