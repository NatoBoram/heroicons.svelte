import type { Meta, StoryObj } from '@storybook/svelte'
import { ClipboardDocument as ClipboardDocumentSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ClipboardDocumentSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ClipboardDocumentSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ClipboardDocument: Story = {}
