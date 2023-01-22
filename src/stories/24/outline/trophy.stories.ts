import type { Meta, StoryObj } from '@storybook/svelte'
import TrophySvelte from '../../../lib/24/outline/trophy.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: TrophySvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<TrophySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Trophy: Story = {}
