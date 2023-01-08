import type { Meta, StoryObj } from '@storybook/svelte'
import { Bolt as BoltSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: BoltSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BoltSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bolt: Story = {}
