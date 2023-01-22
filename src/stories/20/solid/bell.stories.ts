import type { Meta, StoryObj } from '@storybook/svelte'
import BellSvelte from '../../../lib/20/solid/bell.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: BellSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BellSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bell: Story = {}
