import type { Meta, StoryObj } from '@storybook/svelte'
import { ShieldExclamation as ShieldExclamationSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ShieldExclamationSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ShieldExclamationSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ShieldExclamation: Story = {}
