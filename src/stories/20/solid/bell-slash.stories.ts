import type { Meta, StoryObj } from '@storybook/svelte'
import { BellSlash as BellSlashSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: BellSlashSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BellSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellSlash: Story = {}
