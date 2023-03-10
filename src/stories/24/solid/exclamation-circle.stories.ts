import type { Meta, StoryObj } from '@storybook/svelte'
import ExclamationCircleSvelte from '../../../lib/24/solid/exclamation-circle.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ExclamationCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ExclamationCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ExclamationCircle: Story = {}
