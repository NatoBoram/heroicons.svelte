import type { Meta, StoryObj } from '@storybook/svelte'
import Battery100Svelte from '../../../lib/16/solid/battery-100.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: Battery100Svelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<Battery100Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Battery100: Story = {}
