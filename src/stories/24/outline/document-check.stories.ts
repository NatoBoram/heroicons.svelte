import type { Meta, StoryObj } from '@storybook/svelte'
import { DocumentCheck as DocumentCheckSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: DocumentCheckSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DocumentCheckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentCheck: Story = {}
