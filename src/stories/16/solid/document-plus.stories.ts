import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentPlusSvelte from '../../../lib/16/solid/document-plus.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: DocumentPlusSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<DocumentPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentPlus: Story = {}
