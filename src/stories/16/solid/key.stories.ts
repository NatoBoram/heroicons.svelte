import type { Meta, StoryObj } from '@storybook/svelte'
import KeySvelte from '../../../lib/16/solid/key.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: KeySvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<KeySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Key: Story = {}
