import type { Meta, StoryObj } from '@storybook/svelte'
import { InboxArrowDown as InboxArrowDownSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: InboxArrowDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<InboxArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const InboxArrowDown: Story = {}
