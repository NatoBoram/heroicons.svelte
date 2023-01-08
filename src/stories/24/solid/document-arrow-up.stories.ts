import type { Meta, StoryObj } from '@storybook/svelte'
import { DocumentArrowUp as DocumentArrowUpSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: DocumentArrowUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentArrowUp: Story = {}
