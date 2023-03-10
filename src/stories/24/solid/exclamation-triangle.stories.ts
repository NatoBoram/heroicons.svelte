import type { Meta, StoryObj } from '@storybook/svelte'
import ExclamationTriangleSvelte from '../../../lib/24/solid/exclamation-triangle.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ExclamationTriangleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ExclamationTriangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ExclamationTriangle: Story = {}
