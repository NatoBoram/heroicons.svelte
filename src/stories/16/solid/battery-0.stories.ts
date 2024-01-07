import type { Meta, StoryObj } from '@storybook/svelte'
import Battery0Svelte from '../../../lib/16/solid/battery-0.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: Battery0Svelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<Battery0Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Battery0: Story = {}
