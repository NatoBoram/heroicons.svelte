import type { Meta, StoryObj } from '@storybook/svelte'
import HashtagSvelte from '../../../lib/16/solid/hashtag.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: HashtagSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<HashtagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Hashtag: Story = {}
