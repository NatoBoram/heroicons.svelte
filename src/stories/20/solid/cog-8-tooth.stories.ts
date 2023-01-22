import type { Meta, StoryObj } from '@storybook/svelte'
import Cog8ToothSvelte from '../../../lib/20/solid/cog-8-tooth.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: Cog8ToothSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Cog8ToothSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cog8Tooth: Story = {}
