import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentSvelte from '../../../lib/24/solid/document.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: DocumentSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Document: Story = {}
