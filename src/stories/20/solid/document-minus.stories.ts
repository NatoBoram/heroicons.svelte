import type { Meta, StoryObj } from '@storybook/svelte'
import { DocumentMinus as DocumentMinusSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: DocumentMinusSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DocumentMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentMinus: Story = {}
