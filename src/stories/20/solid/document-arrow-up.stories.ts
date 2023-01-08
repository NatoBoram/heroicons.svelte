import type { Meta, StoryObj } from '@storybook/svelte'
import { DocumentArrowUp as DocumentArrowUpSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: DocumentArrowUpSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DocumentArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentArrowUp: Story = {}
