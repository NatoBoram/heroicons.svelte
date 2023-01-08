import type { Meta, StoryObj } from '@storybook/svelte'
import { Bars2 as Bars2Svelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: Bars2Svelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Bars2Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars2: Story = {}
