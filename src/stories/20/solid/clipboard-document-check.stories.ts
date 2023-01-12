import type { Meta, StoryObj } from '@storybook/svelte'
import { ClipboardDocumentCheck as ClipboardDocumentCheckSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ClipboardDocumentCheckSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ClipboardDocumentCheckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ClipboardDocumentCheck: Story = {}
