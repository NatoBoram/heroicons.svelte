import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentArrowUpSvelte from '../../../lib/24/solid/document-arrow-up.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: DocumentArrowUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentArrowUp: Story = {}
