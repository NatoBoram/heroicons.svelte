import type { Meta, StoryObj } from '@storybook/svelte'
import Battery50Svelte from '../../../lib/20/solid/battery-50.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: Battery50Svelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Battery50Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Battery50: Story = {}
