import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentSvelte from '../../../lib/16/solid/document.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: DocumentSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<DocumentSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Document: Story = {}
