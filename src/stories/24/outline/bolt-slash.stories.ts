import type { Meta, StoryObj } from '@storybook/svelte'
import { BoltSlash as BoltSlashSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: BoltSlashSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BoltSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BoltSlash: Story = {}
