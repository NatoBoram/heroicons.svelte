import type { Meta, StoryObj } from '@storybook/svelte'
import { CloudArrowUp as CloudArrowUpSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: CloudArrowUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CloudArrowUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CloudArrowUp: Story = {}
