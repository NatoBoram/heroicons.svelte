import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentMinusSvelte from '../../../lib/24/solid/document-minus.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: DocumentMinusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentMinus: Story = {}
