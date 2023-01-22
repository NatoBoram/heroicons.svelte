import type { Meta, StoryObj } from '@storybook/svelte'
import ClipboardDocumentListSvelte from '../../../lib/20/solid/clipboard-document-list.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ClipboardDocumentListSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ClipboardDocumentListSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ClipboardDocumentList: Story = {}
