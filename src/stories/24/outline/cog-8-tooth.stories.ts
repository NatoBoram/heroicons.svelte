import type { Meta, StoryObj } from '@storybook/svelte'
import { Cog8Tooth as Cog8ToothSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: Cog8ToothSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Cog8ToothSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cog8Tooth: Story = {}
