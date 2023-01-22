import type { Meta, StoryObj } from '@storybook/svelte'
import PhoneArrowUpRightSvelte from '../../../lib/20/solid/phone-arrow-up-right.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: PhoneArrowUpRightSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PhoneArrowUpRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PhoneArrowUpRight: Story = {}
