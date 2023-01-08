import type { Meta, StoryObj } from '@storybook/svelte'
import { BoltSlash as BoltSlashSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: BoltSlashSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BoltSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BoltSlash: Story = {}
