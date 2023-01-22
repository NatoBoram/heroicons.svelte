import type { Meta, StoryObj } from '@storybook/svelte'
import Squares2x2Svelte from '../../../lib/24/outline/squares-2x2.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: Squares2x2Svelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Squares2x2Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Squares2x2: Story = {}
