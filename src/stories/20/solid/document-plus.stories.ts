import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentPlusSvelte from '../../../lib/20/solid/document-plus.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: DocumentPlusSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DocumentPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentPlus: Story = {}
