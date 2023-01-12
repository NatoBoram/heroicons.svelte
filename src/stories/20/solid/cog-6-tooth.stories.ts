import type { Meta, StoryObj } from '@storybook/svelte'
import { Cog6Tooth as Cog6ToothSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: Cog6ToothSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Cog6ToothSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cog6Tooth: Story = {}
