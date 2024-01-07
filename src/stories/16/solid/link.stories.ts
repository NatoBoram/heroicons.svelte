import type { Meta, StoryObj } from '@storybook/svelte'
import LinkSvelte from '../../../lib/16/solid/link.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: LinkSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<LinkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Link: Story = {}
