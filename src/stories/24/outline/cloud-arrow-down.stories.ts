import type { Meta, StoryObj } from '@storybook/svelte'
import CloudArrowDownSvelte from '../../../lib/24/outline/cloud-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: CloudArrowDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CloudArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CloudArrowDown: Story = {}
