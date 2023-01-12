import type { Meta, StoryObj } from '@storybook/svelte'
import { Play as PlaySvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: PlaySvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PlaySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Play: Story = {}
