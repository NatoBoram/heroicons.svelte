import type { Meta, StoryObj } from '@storybook/svelte'
import ShareSvelte from '../../../lib/16/solid/share.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ShareSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ShareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Share: Story = {}
