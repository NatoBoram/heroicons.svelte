import type { Meta, StoryObj } from '@storybook/svelte'
import { BellAlert as BellAlertSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: BellAlertSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BellAlertSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellAlert: Story = {}
