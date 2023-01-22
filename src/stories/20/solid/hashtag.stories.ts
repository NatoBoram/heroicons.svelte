import type { Meta, StoryObj } from '@storybook/svelte'
import HashtagSvelte from '../../../lib/20/solid/hashtag.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: HashtagSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<HashtagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Hashtag: Story = {}
