import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentMagnifyingGlassSvelte from '../../../lib/16/solid/document-magnifying-glass.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: DocumentMagnifyingGlassSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<DocumentMagnifyingGlassSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentMagnifyingGlass: Story = {}
