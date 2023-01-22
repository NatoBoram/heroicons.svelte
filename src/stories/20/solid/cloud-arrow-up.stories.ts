import type { Meta, StoryObj } from '@storybook/svelte'
import CloudArrowUpSvelte from '../../../lib/20/solid/cloud-arrow-up.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: CloudArrowUpSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CloudArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CloudArrowUp: Story = {}
