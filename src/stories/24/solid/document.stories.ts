import type { Meta, StoryObj } from '@storybook/svelte'
import { Document as DocumentSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: DocumentSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Document: Story = {}
