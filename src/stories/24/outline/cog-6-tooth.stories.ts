import type { Meta, StoryObj } from '@storybook/svelte'
import { Cog6Tooth as Cog6ToothSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: Cog6ToothSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Cog6ToothSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cog6Tooth: Story = {}
