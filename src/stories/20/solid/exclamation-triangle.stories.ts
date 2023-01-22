import type { Meta, StoryObj } from '@storybook/svelte'
import ExclamationTriangleSvelte from '../../../lib/20/solid/exclamation-triangle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ExclamationTriangleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ExclamationTriangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ExclamationTriangle: Story = {}
