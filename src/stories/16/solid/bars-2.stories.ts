import type { Meta, StoryObj } from '@storybook/svelte'
import Bars2Svelte from '../../../lib/16/solid/bars-2.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: Bars2Svelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<Bars2Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars2: Story = {}
