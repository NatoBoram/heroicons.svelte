import type { Meta, StoryObj } from '@storybook/svelte'
import CloudArrowDownSvelte from '../../../lib/16/solid/cloud-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CloudArrowDownSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CloudArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CloudArrowDown: Story = {}
