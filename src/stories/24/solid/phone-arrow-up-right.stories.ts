import type { Meta, StoryObj } from '@storybook/svelte'
import PhoneArrowUpRightSvelte from '../../../lib/24/solid/phone-arrow-up-right.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: PhoneArrowUpRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PhoneArrowUpRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PhoneArrowUpRight: Story = {}
