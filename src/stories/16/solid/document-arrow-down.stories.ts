import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentArrowDownSvelte from '../../../lib/16/solid/document-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: DocumentArrowDownSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<DocumentArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentArrowDown: Story = {}
