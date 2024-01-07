import type { Meta, StoryObj } from '@storybook/svelte'
import GifSvelte from '../../../lib/16/solid/gif.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: GifSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<GifSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Gif: Story = {}
