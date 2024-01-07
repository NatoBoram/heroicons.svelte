import type { Meta, StoryObj } from '@storybook/svelte'
import CloudArrowUpSvelte from '../../../lib/16/solid/cloud-arrow-up.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CloudArrowUpSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CloudArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CloudArrowUp: Story = {}
