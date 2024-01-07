import type { Meta, StoryObj } from '@storybook/svelte'
import Battery50Svelte from '../../../lib/16/solid/battery-50.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: Battery50Svelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<Battery50Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Battery50: Story = {}
