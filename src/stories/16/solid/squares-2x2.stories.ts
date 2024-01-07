import type { Meta, StoryObj } from '@storybook/svelte'
import Squares2x2Svelte from '../../../lib/16/solid/squares-2x2.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: Squares2x2Svelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<Squares2x2Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Squares2x2: Story = {}
