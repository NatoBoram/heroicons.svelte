import type { Meta, StoryObj } from '@storybook/svelte'
import { Bell as BellSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: BellSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BellSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bell: Story = {}
