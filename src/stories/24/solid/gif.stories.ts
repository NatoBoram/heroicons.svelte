import type { Meta, StoryObj } from '@storybook/svelte'
import { Gif as GifSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: GifSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<GifSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Gif: Story = {}
