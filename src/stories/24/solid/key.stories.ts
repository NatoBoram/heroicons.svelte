import type { Meta, StoryObj } from '@storybook/svelte'
import { Key as KeySvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: KeySvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<KeySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Key: Story = {}
