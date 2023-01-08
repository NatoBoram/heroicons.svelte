import type { Meta, StoryObj } from '@storybook/svelte'
import { Rss as RssSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: RssSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<RssSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Rss: Story = {}
