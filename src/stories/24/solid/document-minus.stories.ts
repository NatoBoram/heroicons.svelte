import type { Meta, StoryObj } from '@storybook/svelte'
import { DocumentMinus as DocumentMinusSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: DocumentMinusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentMinus: Story = {}
