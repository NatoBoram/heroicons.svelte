import type { Meta, StoryObj } from '@storybook/svelte'
import { Forward as ForwardSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ForwardSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ForwardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Forward: Story = {}
