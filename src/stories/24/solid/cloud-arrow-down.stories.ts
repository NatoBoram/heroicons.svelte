import type { Meta, StoryObj } from '@storybook/svelte'
import CloudArrowDownSvelte from '../../../lib/24/solid/cloud-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: CloudArrowDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CloudArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CloudArrowDown: Story = {}
