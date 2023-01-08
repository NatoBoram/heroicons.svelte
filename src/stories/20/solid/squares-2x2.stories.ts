import type { Meta, StoryObj } from '@storybook/svelte'
import { Squares2x2 as Squares2x2Svelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: Squares2x2Svelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Squares2x2Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Squares2x2: Story = {}
