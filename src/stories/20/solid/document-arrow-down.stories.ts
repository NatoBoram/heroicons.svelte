import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentArrowDownSvelte from '../../../lib/20/solid/document-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: DocumentArrowDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DocumentArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentArrowDown: Story = {}
