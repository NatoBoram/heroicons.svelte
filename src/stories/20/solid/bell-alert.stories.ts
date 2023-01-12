import type { Meta, StoryObj } from '@storybook/svelte'
import { BellAlert as BellAlertSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: BellAlertSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BellAlertSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellAlert: Story = {}
