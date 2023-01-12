import type { Meta, StoryObj } from '@storybook/svelte'
import { Document as DocumentSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: DocumentSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DocumentSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Document: Story = {}
