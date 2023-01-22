import type { Meta, StoryObj } from '@storybook/svelte'
import Bars3Svelte from '../../../lib/24/outline/bars-3.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: Bars3Svelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Bars3Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars3: Story = {}
