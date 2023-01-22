import type { Meta, StoryObj } from '@storybook/svelte'
import ShareSvelte from '../../../lib/20/solid/share.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ShareSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ShareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Share: Story = {}
