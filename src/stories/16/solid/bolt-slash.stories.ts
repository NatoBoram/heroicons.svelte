import type { Meta, StoryObj } from '@storybook/svelte'
import BoltSlashSvelte from '../../../lib/16/solid/bolt-slash.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BoltSlashSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BoltSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BoltSlash: Story = {}
