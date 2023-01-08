import type { Meta, StoryObj } from '@storybook/svelte'
import { Share as ShareSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ShareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ShareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Share: Story = {}
