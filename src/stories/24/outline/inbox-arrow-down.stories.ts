import type { Meta, StoryObj } from '@storybook/svelte'
import { InboxArrowDown as InboxArrowDownSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: InboxArrowDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<InboxArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const InboxArrowDown: Story = {}
