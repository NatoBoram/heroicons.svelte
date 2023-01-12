import type { Meta, StoryObj } from '@storybook/svelte'
import { DocumentPlus as DocumentPlusSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: DocumentPlusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentPlus: Story = {}
