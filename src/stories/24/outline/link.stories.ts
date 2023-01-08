import type { Meta, StoryObj } from '@storybook/svelte'
import { Link as LinkSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: LinkSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<LinkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Link: Story = {}
