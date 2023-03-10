import type { Meta, StoryObj } from '@storybook/svelte'
import Bars2Svelte from '../../../lib/24/solid/bars-2.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: Bars2Svelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Bars2Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars2: Story = {}
