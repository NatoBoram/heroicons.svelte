import type { Meta, StoryObj } from '@storybook/svelte'
import { DocumentText as DocumentTextSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: DocumentTextSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DocumentTextSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentText: Story = {}
