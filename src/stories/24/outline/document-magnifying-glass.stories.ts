import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentMagnifyingGlassSvelte from '../../../lib/24/outline/document-magnifying-glass.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: DocumentMagnifyingGlassSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentMagnifyingGlassSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentMagnifyingGlass: Story = {}
