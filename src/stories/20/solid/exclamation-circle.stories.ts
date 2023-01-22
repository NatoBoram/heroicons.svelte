import type { Meta, StoryObj } from '@storybook/svelte'
import ExclamationCircleSvelte from '../../../lib/20/solid/exclamation-circle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ExclamationCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ExclamationCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ExclamationCircle: Story = {}
