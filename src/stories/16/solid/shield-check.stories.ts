import type { Meta, StoryObj } from '@storybook/svelte'
import ShieldCheckSvelte from '../../../lib/16/solid/shield-check.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ShieldCheckSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ShieldCheckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ShieldCheck: Story = {}
