import type { Meta, StoryObj } from '@storybook/svelte'
import { Link as LinkSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: LinkSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<LinkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Link: Story = {}
