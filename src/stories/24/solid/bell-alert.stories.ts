import type { Meta, StoryObj } from '@storybook/svelte'
import { BellAlert as BellAlertSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: BellAlertSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BellAlertSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellAlert: Story = {}
