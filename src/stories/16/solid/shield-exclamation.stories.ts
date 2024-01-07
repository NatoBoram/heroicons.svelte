import type { Meta, StoryObj } from '@storybook/svelte'
import ShieldExclamationSvelte from '../../../lib/16/solid/shield-exclamation.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ShieldExclamationSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ShieldExclamationSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ShieldExclamation: Story = {}
