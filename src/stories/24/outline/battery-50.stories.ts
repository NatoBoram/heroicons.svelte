import type { Meta, StoryObj } from '@storybook/svelte'
import Battery50Svelte from '../../../lib/24/outline/battery-50.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: Battery50Svelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Battery50Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Battery50: Story = {}
