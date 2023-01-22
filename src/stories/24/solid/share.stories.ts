import type { Meta, StoryObj } from '@storybook/svelte'
import ShareSvelte from '../../../lib/24/solid/share.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ShareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ShareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Share: Story = {}
