import type { Meta, StoryObj } from '@storybook/svelte'
import { ShieldExclamation as ShieldExclamationSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ShieldExclamationSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ShieldExclamationSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ShieldExclamation: Story = {}
