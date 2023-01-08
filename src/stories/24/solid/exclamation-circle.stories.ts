import type { Meta, StoryObj } from '@storybook/svelte'
import { ExclamationCircle as ExclamationCircleSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ExclamationCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ExclamationCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ExclamationCircle: Story = {}
