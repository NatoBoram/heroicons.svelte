import type { Meta, StoryObj } from '@storybook/svelte'
import LinkSvelte from '../../../lib/24/solid/link.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: LinkSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<LinkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Link: Story = {}
