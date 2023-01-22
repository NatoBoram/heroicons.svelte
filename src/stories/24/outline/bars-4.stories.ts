import type { Meta, StoryObj } from '@storybook/svelte'
import Bars4Svelte from '../../../lib/24/outline/bars-4.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: Bars4Svelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Bars4Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars4: Story = {}
