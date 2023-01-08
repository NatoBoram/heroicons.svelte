import type { Meta, StoryObj } from '@storybook/svelte'
import { DocumentText as DocumentTextSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: DocumentTextSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentTextSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentText: Story = {}
