import type { Meta, StoryObj } from '@storybook/svelte'
import { BellSlash as BellSlashSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: BellSlashSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BellSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellSlash: Story = {}
