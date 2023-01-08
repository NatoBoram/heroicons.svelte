import type { Meta, StoryObj } from '@storybook/svelte'
import { PhoneArrowUpRight as PhoneArrowUpRightSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: PhoneArrowUpRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PhoneArrowUpRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PhoneArrowUpRight: Story = {}
