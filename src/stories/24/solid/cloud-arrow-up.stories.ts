import type { Meta, StoryObj } from '@storybook/svelte'
import CloudArrowUpSvelte from '../../../lib/24/solid/cloud-arrow-up.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: CloudArrowUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CloudArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CloudArrowUp: Story = {}
