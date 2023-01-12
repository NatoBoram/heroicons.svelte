import type { Meta, StoryObj } from '@storybook/svelte'
import { Bell as BellSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: BellSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BellSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bell: Story = {}
