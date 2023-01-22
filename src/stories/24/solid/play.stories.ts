import type { Meta, StoryObj } from '@storybook/svelte'
import PlaySvelte from '../../../lib/24/solid/play.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: PlaySvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PlaySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Play: Story = {}
