import type { Meta, StoryObj } from '@storybook/svelte'
import Cog8ToothSvelte from '../../../lib/24/outline/cog-8-tooth.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: Cog8ToothSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Cog8ToothSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cog8Tooth: Story = {}
