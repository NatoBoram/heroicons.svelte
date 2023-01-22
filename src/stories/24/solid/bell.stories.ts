import type { Meta, StoryObj } from '@storybook/svelte'
import BellSvelte from '../../../lib/24/solid/bell.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: BellSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BellSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bell: Story = {}
