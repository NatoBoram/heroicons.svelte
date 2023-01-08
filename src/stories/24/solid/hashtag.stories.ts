import type { Meta, StoryObj } from '@storybook/svelte'
import { Hashtag as HashtagSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: HashtagSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<HashtagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Hashtag: Story = {}
