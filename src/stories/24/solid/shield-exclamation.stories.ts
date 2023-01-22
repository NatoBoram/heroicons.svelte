import type { Meta, StoryObj } from '@storybook/svelte'
import ShieldExclamationSvelte from '../../../lib/24/solid/shield-exclamation.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ShieldExclamationSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ShieldExclamationSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ShieldExclamation: Story = {}
