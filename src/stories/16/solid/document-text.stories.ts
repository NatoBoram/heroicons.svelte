import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentTextSvelte from '../../../lib/16/solid/document-text.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: DocumentTextSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<DocumentTextSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentText: Story = {}
