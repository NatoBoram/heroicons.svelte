import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentMinusSvelte from '../../../lib/20/solid/document-minus.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: DocumentMinusSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DocumentMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentMinus: Story = {}
