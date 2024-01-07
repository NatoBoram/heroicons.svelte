import type { Meta, StoryObj } from '@storybook/svelte'
import Cog6ToothSvelte from '../../../lib/16/solid/cog-6-tooth.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: Cog6ToothSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<Cog6ToothSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cog6Tooth: Story = {}
