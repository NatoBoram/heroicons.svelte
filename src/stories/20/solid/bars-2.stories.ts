import type { Meta, StoryObj } from '@storybook/svelte'
import Bars2Svelte from '../../../lib/20/solid/bars-2.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: Bars2Svelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Bars2Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars2: Story = {}
