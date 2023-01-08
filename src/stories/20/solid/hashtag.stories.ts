import type { Meta, StoryObj } from '@storybook/svelte'
import { Hashtag as HashtagSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: HashtagSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<HashtagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Hashtag: Story = {}
