import type { Meta, StoryObj } from '@storybook/svelte'
import { ShieldCheck as ShieldCheckSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ShieldCheckSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ShieldCheckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ShieldCheck: Story = {}
