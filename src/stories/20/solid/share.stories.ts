import type { Meta, StoryObj } from '@storybook/svelte'
import { Share as ShareSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ShareSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ShareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Share: Story = {}
