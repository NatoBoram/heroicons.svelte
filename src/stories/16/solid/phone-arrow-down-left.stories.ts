import type { Meta, StoryObj } from '@storybook/svelte'
import PhoneArrowDownLeftSvelte from '../../../lib/16/solid/phone-arrow-down-left.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PhoneArrowDownLeftSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PhoneArrowDownLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PhoneArrowDownLeft: Story = {}
