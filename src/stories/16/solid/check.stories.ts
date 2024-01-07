import type { Meta, StoryObj } from '@storybook/svelte'
import CheckSvelte from '../../../lib/16/solid/check.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CheckSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CheckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Check: Story = {}
