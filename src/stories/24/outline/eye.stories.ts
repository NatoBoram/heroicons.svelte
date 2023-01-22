import type { Meta, StoryObj } from '@storybook/svelte'
import EyeSvelte from '../../../lib/24/outline/eye.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: EyeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<EyeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Eye: Story = {}
