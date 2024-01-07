import type { Meta, StoryObj } from '@storybook/svelte'
import Bars3Svelte from '../../../lib/16/solid/bars-3.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: Bars3Svelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<Bars3Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars3: Story = {}
