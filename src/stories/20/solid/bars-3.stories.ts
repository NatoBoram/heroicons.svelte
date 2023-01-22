import type { Meta, StoryObj } from '@storybook/svelte'
import Bars3Svelte from '../../../lib/20/solid/bars-3.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: Bars3Svelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Bars3Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars3: Story = {}
