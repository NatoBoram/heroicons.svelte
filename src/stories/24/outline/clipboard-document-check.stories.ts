import type { Meta, StoryObj } from '@storybook/svelte'
import { ClipboardDocumentCheck as ClipboardDocumentCheckSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ClipboardDocumentCheckSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ClipboardDocumentCheckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ClipboardDocumentCheck: Story = {}
