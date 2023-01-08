import type { Meta, StoryObj } from '@storybook/svelte'
import { CloudArrowUp as CloudArrowUpSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: CloudArrowUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CloudArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CloudArrowUp: Story = {}
