import type { Meta, StoryObj } from '@storybook/svelte'
import { DocumentArrowDown as DocumentArrowDownSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: DocumentArrowDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DocumentArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentArrowDown: Story = {}
