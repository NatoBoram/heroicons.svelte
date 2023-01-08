import type { Meta, StoryObj } from '@storybook/svelte'
import { BellAlert as BellAlertSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: BellAlertSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BellAlertSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellAlert: Story = {}
