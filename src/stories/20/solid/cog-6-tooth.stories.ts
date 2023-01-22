import type { Meta, StoryObj } from '@storybook/svelte'
import Cog6ToothSvelte from '../../../lib/20/solid/cog-6-tooth.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: Cog6ToothSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Cog6ToothSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cog6Tooth: Story = {}
