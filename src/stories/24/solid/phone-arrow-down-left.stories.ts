import type { Meta, StoryObj } from '@storybook/svelte'
import { PhoneArrowDownLeft as PhoneArrowDownLeftSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: PhoneArrowDownLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PhoneArrowDownLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PhoneArrowDownLeft: Story = {}
