import type { Meta, StoryObj } from '@storybook/svelte'
import ExclamationCircleSvelte from '../../../lib/16/solid/exclamation-circle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ExclamationCircleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ExclamationCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ExclamationCircle: Story = {}
