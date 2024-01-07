import type { Meta, StoryObj } from '@storybook/svelte'
import Cog8ToothSvelte from '../../../lib/16/solid/cog-8-tooth.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: Cog8ToothSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<Cog8ToothSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cog8Tooth: Story = {}
