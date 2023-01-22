import type { Meta, StoryObj } from '@storybook/svelte'
import KeySvelte from '../../../lib/24/outline/key.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: KeySvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<KeySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Key: Story = {}
