import type { Meta, StoryObj } from '@storybook/svelte'
import { Hashtag as HashtagSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: HashtagSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<HashtagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Hashtag: Story = {}
