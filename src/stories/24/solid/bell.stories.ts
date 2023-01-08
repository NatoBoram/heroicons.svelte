import type { Meta, StoryObj } from '@storybook/svelte'
import { Bell as BellSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: BellSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BellSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bell: Story = {}
