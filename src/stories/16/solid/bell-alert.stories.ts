import type { Meta, StoryObj } from '@storybook/svelte'
import BellAlertSvelte from '../../../lib/16/solid/bell-alert.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BellAlertSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BellAlertSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellAlert: Story = {}
