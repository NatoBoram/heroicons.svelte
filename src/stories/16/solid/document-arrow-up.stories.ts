import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentArrowUpSvelte from '../../../lib/16/solid/document-arrow-up.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: DocumentArrowUpSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<DocumentArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentArrowUp: Story = {}
