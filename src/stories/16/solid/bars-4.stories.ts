import type { Meta, StoryObj } from '@storybook/svelte'
import Bars4Svelte from '../../../lib/16/solid/bars-4.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: Bars4Svelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<Bars4Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars4: Story = {}
