import type { Meta, StoryObj } from '@storybook/svelte'
import { ClipboardDocumentCheck as ClipboardDocumentCheckSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ClipboardDocumentCheckSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ClipboardDocumentCheckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ClipboardDocumentCheck: Story = {}
