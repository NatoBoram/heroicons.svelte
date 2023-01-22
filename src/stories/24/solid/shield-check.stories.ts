import type { Meta, StoryObj } from '@storybook/svelte'
import ShieldCheckSvelte from '../../../lib/24/solid/shield-check.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ShieldCheckSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ShieldCheckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ShieldCheck: Story = {}
