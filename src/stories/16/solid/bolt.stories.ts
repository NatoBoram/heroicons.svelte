import type { Meta, StoryObj } from '@storybook/svelte'
import BoltSvelte from '../../../lib/16/solid/bolt.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BoltSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BoltSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bolt: Story = {}
