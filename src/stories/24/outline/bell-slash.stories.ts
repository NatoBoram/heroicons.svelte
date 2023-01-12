import type { Meta, StoryObj } from '@storybook/svelte'
import { BellSlash as BellSlashSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: BellSlashSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BellSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellSlash: Story = {}
