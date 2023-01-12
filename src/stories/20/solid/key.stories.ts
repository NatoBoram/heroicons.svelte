import type { Meta, StoryObj } from '@storybook/svelte'
import { Key as KeySvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: KeySvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<KeySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Key: Story = {}
