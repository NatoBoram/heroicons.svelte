import type { Meta, StoryObj } from '@storybook/svelte'
import { DocumentCheck as DocumentCheckSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: DocumentCheckSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DocumentCheckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DocumentCheck: Story = {}
