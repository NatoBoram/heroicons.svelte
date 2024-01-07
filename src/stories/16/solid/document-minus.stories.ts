import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentMinusSvelte from '../../../lib/16/solid/document-minus.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: DocumentMinusSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<DocumentMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentMinus: Story = {}
