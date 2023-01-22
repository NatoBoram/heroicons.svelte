import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentTextSvelte from '../../../lib/24/solid/document-text.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: DocumentTextSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentTextSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentText: Story = {}
