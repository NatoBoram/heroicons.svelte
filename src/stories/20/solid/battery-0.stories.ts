import type { Meta, StoryObj } from '@storybook/svelte'
import { Battery0 as Battery0Svelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: Battery0Svelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Battery0Svelte>

export default meta
type Story = StoryObj<typeof meta>

export const Battery0: Story = {}
