import type { Meta, StoryObj } from '@storybook/svelte'
import Cog6ToothSvelte from '../../../lib/24/solid/cog-6-tooth.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: Cog6ToothSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Cog6ToothSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cog6Tooth: Story = {}
