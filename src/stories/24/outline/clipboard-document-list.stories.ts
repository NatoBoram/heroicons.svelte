import type { Meta, StoryObj } from '@storybook/svelte'
import { ClipboardDocumentList as ClipboardDocumentListSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ClipboardDocumentListSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ClipboardDocumentListSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ClipboardDocumentList: Story = {}
