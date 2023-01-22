import type { Meta, StoryObj } from '@storybook/svelte'
import BellSlashSvelte from '../../../lib/20/solid/bell-slash.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: BellSlashSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BellSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellSlash: Story = {}
