import type { Meta, StoryObj } from '@storybook/svelte'
import { ExclamationCircle as ExclamationCircleSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ExclamationCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ExclamationCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ExclamationCircle: Story = {}
