import type { Meta, StoryObj } from '@storybook/svelte'
import { CloudArrowUp as CloudArrowUpSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: CloudArrowUpSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CloudArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CloudArrowUp: Story = {}
