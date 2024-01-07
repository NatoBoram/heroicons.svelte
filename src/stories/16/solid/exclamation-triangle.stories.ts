import type { Meta, StoryObj } from '@storybook/svelte'
import ExclamationTriangleSvelte from '../../../lib/16/solid/exclamation-triangle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ExclamationTriangleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ExclamationTriangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ExclamationTriangle: Story = {}
