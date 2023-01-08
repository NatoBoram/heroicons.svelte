import type { Meta, StoryObj } from '@storybook/svelte'
import { Bars3 as Bars3Svelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: Bars3Svelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Bars3Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars3: Story = {}
