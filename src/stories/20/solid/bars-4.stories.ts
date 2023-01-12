import type { Meta, StoryObj } from '@storybook/svelte'
import { Bars4 as Bars4Svelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: Bars4Svelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Bars4Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars4: Story = {}
