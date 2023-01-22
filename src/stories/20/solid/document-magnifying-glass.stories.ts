import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentMagnifyingGlassSvelte from '../../../lib/20/solid/document-magnifying-glass.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: DocumentMagnifyingGlassSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DocumentMagnifyingGlassSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentMagnifyingGlass: Story = {}
