import type { Meta, StoryObj } from '@storybook/svelte'
import BellSvelte from '../../../lib/16/solid/bell.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BellSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BellSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bell: Story = {}
