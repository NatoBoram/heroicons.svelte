import type { Meta, StoryObj } from '@storybook/svelte'
import { Gif as GifSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: GifSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<GifSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Gif: Story = {}
