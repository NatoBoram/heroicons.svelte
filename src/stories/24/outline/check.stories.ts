import type { Meta, StoryObj } from '@storybook/svelte'
import { Check as CheckSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: CheckSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CheckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Check: Story = {}
