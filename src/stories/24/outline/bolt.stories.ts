import type { Meta, StoryObj } from '@storybook/svelte'
import { Bolt as BoltSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: BoltSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BoltSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bolt: Story = {}
