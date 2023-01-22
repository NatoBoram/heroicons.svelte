import type { Meta, StoryObj } from '@storybook/svelte'
import DocumentCheckSvelte from '../../../lib/20/solid/document-check.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: DocumentCheckSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DocumentCheckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentCheck: Story = {}
