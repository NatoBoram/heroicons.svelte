import type { Meta, StoryObj } from '@storybook/svelte'
import BellAlertSvelte from '../../../lib/24/solid/bell-alert.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: BellAlertSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BellAlertSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellAlert: Story = {}
