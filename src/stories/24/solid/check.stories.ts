import type { Meta, StoryObj } from '@storybook/svelte'
import CheckSvelte from '../../../lib/24/solid/check.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: CheckSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CheckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Check: Story = {}
