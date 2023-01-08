import type { Meta, StoryObj } from '@storybook/svelte'
import { ExclamationTriangle as ExclamationTriangleSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ExclamationTriangleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ExclamationTriangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ExclamationTriangle: Story = {}
