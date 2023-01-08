import type { Meta, StoryObj } from '@storybook/svelte'
import { ShieldCheck as ShieldCheckSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ShieldCheckSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ShieldCheckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ShieldCheck: Story = {}
