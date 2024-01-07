import type { Meta, StoryObj } from '@storybook/svelte'
import PhoneArrowUpRightSvelte from '../../../lib/16/solid/phone-arrow-up-right.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PhoneArrowUpRightSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PhoneArrowUpRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PhoneArrowUpRight: Story = {}
