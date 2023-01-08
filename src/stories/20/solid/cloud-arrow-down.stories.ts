import type { Meta, StoryObj } from '@storybook/svelte'
import { CloudArrowDown as CloudArrowDownSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: CloudArrowDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CloudArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CloudArrowDown: Story = {}
