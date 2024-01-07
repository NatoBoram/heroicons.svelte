import type { Meta, StoryObj } from '@storybook/svelte'
import CogSvelte from '../../../lib/16/solid/cog.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CogSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CogSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cog: Story = {}
