import type { Meta, StoryObj } from '@storybook/svelte'
import { InboxStack as InboxStackSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: InboxStackSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<InboxStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const InboxStack: Story = {}
