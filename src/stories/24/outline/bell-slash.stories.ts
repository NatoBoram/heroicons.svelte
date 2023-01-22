import type { Meta, StoryObj } from '@storybook/svelte'
import BellSlashSvelte from '../../../lib/24/outline/bell-slash.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: BellSlashSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BellSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellSlash: Story = {}
