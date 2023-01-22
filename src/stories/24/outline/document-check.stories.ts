import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentCheckSvelte from '../../../lib/24/outline/document-check.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: DocumentCheckSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentCheckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentCheck: Story = {}
