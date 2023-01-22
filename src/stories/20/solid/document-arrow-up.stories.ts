import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentArrowUpSvelte from '../../../lib/20/solid/document-arrow-up.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: DocumentArrowUpSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DocumentArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentArrowUp: Story = {}
