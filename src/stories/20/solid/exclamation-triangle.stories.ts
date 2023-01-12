import type { Meta, StoryObj } from '@storybook/svelte'
import { ExclamationTriangle as ExclamationTriangleSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ExclamationTriangleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ExclamationTriangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ExclamationTriangle: Story = {}
