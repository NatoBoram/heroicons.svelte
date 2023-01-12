import type { Meta, StoryObj } from '@storybook/svelte'
import { Battery100 as Battery100Svelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: Battery100Svelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Battery100Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Battery100: Story = {}
