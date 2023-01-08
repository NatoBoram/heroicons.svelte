import type { Meta, StoryObj } from '@storybook/svelte'
import { Battery0 as Battery0Svelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: Battery0Svelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Battery0Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Battery0: Story = {}
