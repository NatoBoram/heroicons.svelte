import type { Meta, StoryObj } from '@storybook/svelte'
import { PhoneArrowDownLeft as PhoneArrowDownLeftSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: PhoneArrowDownLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PhoneArrowDownLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PhoneArrowDownLeft: Story = {}
