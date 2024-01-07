import type { Meta, StoryObj } from '@storybook/svelte'
import BellSlashSvelte from '../../../lib/16/solid/bell-slash.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BellSlashSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BellSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellSlash: Story = {}
