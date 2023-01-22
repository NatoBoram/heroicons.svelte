import type { Meta, StoryObj } from '@storybook/svelte'
import CogSvelte from '../../../lib/24/outline/cog.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: CogSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CogSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cog: Story = {}
