import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowDownTray as ArrowDownTraySvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ArrowDownTraySvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowDownTraySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownTray: Story = {}
