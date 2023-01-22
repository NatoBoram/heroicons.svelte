import type { Meta, StoryObj } from '@storybook/svelte'
import BoltSvelte from '../../../lib/24/solid/bolt.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: BoltSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BoltSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bolt: Story = {}
