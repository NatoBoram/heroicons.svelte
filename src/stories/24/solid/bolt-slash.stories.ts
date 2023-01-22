import type { Meta, StoryObj } from '@storybook/svelte'
import BoltSlashSvelte from '../../../lib/24/solid/bolt-slash.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: BoltSlashSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BoltSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BoltSlash: Story = {}
