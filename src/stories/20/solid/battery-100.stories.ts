import type { Meta, StoryObj } from '@storybook/svelte'
import Battery100Svelte from '../../../lib/20/solid/battery-100.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: Battery100Svelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Battery100Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Battery100: Story = {}
