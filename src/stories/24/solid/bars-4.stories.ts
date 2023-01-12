import type { Meta, StoryObj } from '@storybook/svelte'
import { Bars4 as Bars4Svelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: Bars4Svelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Bars4Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars4: Story = {}
