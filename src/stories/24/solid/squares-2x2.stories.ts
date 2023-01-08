import type { Meta, StoryObj } from '@storybook/svelte'
import { Squares2x2 as Squares2x2Svelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: Squares2x2Svelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Squares2x2Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Squares2x2: Story = {}
