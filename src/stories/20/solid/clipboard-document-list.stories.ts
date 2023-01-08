import type { Meta, StoryObj } from '@storybook/svelte'
import { ClipboardDocumentList as ClipboardDocumentListSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ClipboardDocumentListSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ClipboardDocumentListSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ClipboardDocumentList: Story = {}
