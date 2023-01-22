import type { Meta, StoryObj } from '@storybook/svelte'
import BoltSlashSvelte from '../../../lib/20/solid/bolt-slash.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: BoltSlashSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BoltSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BoltSlash: Story = {}
