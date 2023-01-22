import type { Meta, StoryObj } from '@storybook/svelte'
import PlaySvelte from '../../../lib/24/outline/play.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: PlaySvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PlaySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Play: Story = {}
