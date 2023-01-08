import type { Meta, StoryObj } from '@storybook/svelte'
import { Bars2 as Bars2Svelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: Bars2Svelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Bars2Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars2: Story = {}
