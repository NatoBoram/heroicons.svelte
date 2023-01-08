import type { Meta, StoryObj } from '@storybook/svelte'
import { DocumentMagnifyingGlass as DocumentMagnifyingGlassSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: DocumentMagnifyingGlassSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentMagnifyingGlassSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentMagnifyingGlass: Story = {}
