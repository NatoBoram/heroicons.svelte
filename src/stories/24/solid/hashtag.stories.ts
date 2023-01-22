import type { Meta, StoryObj } from '@storybook/svelte'
import HashtagSvelte from '../../../lib/24/solid/hashtag.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: HashtagSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<HashtagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Hashtag: Story = {}
