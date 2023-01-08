import type { Meta, StoryObj } from '@storybook/svelte'
import { BoltSlash as BoltSlashSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: BoltSlashSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BoltSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BoltSlash: Story = {}
