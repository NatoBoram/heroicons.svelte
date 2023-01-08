import type { Meta, StoryObj } from '@storybook/svelte'
import { Bars3CenterLeft as Bars3CenterLeftSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: Bars3CenterLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Bars3CenterLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars3CenterLeft: Story = {}
