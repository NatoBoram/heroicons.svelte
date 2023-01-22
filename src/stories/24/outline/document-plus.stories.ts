import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentPlusSvelte from '../../../lib/24/outline/document-plus.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: DocumentPlusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentPlus: Story = {}
