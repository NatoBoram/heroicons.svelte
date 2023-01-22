import type { Meta, StoryObj } from '@storybook/svelte'
import CloudArrowDownSvelte from '../../../lib/20/solid/cloud-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: CloudArrowDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CloudArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CloudArrowDown: Story = {}
