import type { Meta, StoryObj } from '@storybook/svelte'
import { Play as PlaySvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: PlaySvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PlaySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Play: Story = {}
