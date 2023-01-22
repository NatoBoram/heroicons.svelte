import type { Meta, StoryObj } from '@storybook/svelte'
import PlaySvelte from '../../../lib/20/solid/play.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: PlaySvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PlaySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Play: Story = {}
