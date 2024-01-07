import type { Meta, StoryObj } from '@storybook/svelte'
import PlaySvelte from '../../../lib/16/solid/play.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PlaySvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PlaySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Play: Story = {}
