import type { Meta, StoryObj } from '@storybook/svelte'
import { Bars3 as Bars3Svelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: Bars3Svelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Bars3Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars3: Story = {}