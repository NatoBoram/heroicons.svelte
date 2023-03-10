import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentCheckSvelte from '../../../lib/24/solid/document-check.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: DocumentCheckSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentCheckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentCheck: Story = {}
