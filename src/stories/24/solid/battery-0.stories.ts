import type { Meta, StoryObj } from '@storybook/svelte'
import Battery0Svelte from '../../../lib/24/solid/battery-0.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: Battery0Svelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Battery0Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Battery0: Story = {}
