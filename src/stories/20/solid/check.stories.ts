import type { Meta, StoryObj } from '@storybook/svelte'
import { Check as CheckSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: CheckSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CheckSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Check: Story = {}
