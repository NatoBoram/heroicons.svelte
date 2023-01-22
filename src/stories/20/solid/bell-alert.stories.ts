import type { Meta, StoryObj } from '@storybook/svelte'
import BellAlertSvelte from '../../../lib/20/solid/bell-alert.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: BellAlertSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BellAlertSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellAlert: Story = {}
